import axios from 'axios';

// const BASE_URL = process.env.BACKEND_URL;

interface User {
  // _id: string
  userId : string
  username: string
  email: string
  // groups: string[]
  // createdAt: string
  // updatedAt: string
  // __v: number
}


export async function findUser(user: User) {
  try {
    console.log("the find user function is beign called ")
    // console.log(BASE_URL);
    const response = await axios.post(`http://localhost:8080/checkUser`, 
      user,
    );
    console.log(response.data)
    return response.data; // Return data if the request is successful
  } catch (error) {
    
      console.error('Unexpected error:', error);
    
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
