export interface UserResponse {
  id: string;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  gender?: string;
  dob?: string;
  delete?: boolean;
}