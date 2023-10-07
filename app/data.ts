import { PersonInterface } from "./components/ImagesCarrousel";
import { FilterOptionInterface } from "./page";

export const persons: PersonInterface[] = [
    {
      name: 'John Doe',
      age: 25,
      location: 'New York',
      image: '/images/1.jpg',
    },
    {
      name: 'Jane Doe',
      age: 30,
      location: 'Los Angeles',
      image: '/images/2.jpg',
    },
    {
      name: 'Bob Smith',
      age: 35,
      location: 'Chicago',
      image: '/images/3.jpg',
    },
    {
      name: 'Alice Johnson',
      age: 40,
      location: 'Houston',
      image: '/images/4.jpg',
    },
    {
      name: 'Mike Brown',
      age: 45,
      location: 'Miami',
      image: '/images/5.jpg',
    },
    {
      name: 'Sarah Lee',
      age: 50,
      location: 'New York',
      image: '/images/6.jpg',
    },
    {
      name: 'David Kim',
      age: 55,
      location: 'Los Angeles',
      image: '/images/7.jpg',
    },
    {
      name: 'Emily Davis',
      age: 60,
      location: 'Chicago',
      image: '/images/8.jpg',
    },
    {
      name: 'Daniel Wilson',
      age: 65,
      location: 'Houston',
      image: '/images/9.jpg',
    },
    {
      name: 'Olivia Martin',
      age: 70,
      location: 'Miami',
      image: '/images/10.jpg',
    },
    {
      name: 'William Taylor',
      age: 75,
      location: 'New York',
      image: '/images/11.jpg',
    },
    {
      name: 'Sophia Anderson',
      age: 80,
      location: 'Los Angeles',
      image: '/images/12.jpg',
    },
  ];

  export const agePreferences: FilterOptionInterface[] = [{ value: '18-25', label: '18-25' },
  { value: '25-35', label: '25-35' },
  { value: '35-45', label: '35-45' },
  { value: '45-55', label: '45-55' },
  { value: '55-65', label: '55-65' },
  { value: '65+', label: '65+' }
  ];

  export const genderPreferences: FilterOptionInterface[] = [  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'transgender', label: 'Transgender' },
  { value: 'other', label: 'Other' }];