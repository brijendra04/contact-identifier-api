import express from 'express';
import prisma from "../config/db"; 
import { validatePhone, validateEmail, handleError, formatResponse } from '../utils/helpers';

const app = express();
app.use(express.json()); 

app.post('/contacts', async (req, res) => {
  const { phone, email } = req.body;

  // Validate phone and email
  if (!validatePhone(phone)) {
    return handleError(res, 400, 'Invalid phone number');
  }

  if (email && !validateEmail(email)) {
    return handleError(res, 400, 'Invalid email address');
  }

  try {
    
    const contacts = await identifyContact(phone, email);

    if (contacts.length > 0) {
      const formattedData = formatResponse(contacts);
      res.status(200).json(formattedData);
    } else {
      return handleError(res, 404, 'No contacts found');
    }
  } catch (error) {
    return handleError(res, 500, 'Server error');
  }
});

export const identifyContact = async (phone: string, email?: string) => {
    try {
      const whereConditions: any[] = [{ phone }];
      
      if (email) {
        whereConditions.push({ email });
      }
  
      const contacts = await prisma.contact.findMany({
        where: {
          OR: whereConditions,
        },
      });
  
      return contacts;
    } catch (error) {
      throw new Error('Error querying the database');
    }
};
  

export default app;
