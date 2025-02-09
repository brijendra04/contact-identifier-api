// helpers.ts

// Helper function to validate phone number format
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  
  // Helper function to validate email format
  export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  // Helper function to handle errors
  export const handleError = (res: any, statusCode: number, message: string): void => {
    res.status(statusCode).json({ error: message });
  };
  
  // Helper function to format data before returning
  export const formatResponse = (data: any): any => {
    return { success: true, data };
  };
  