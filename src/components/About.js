import User from './User';
import UserClass from './UserClass';
import IMG_URL from '../utilis/constants';
import { HEADER_LOGO } from '../utilis/constants';
const About = () => {
  return (
    <div>
      <div className='bg-gray-100 min-h-screen'>
        <div className='py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            {/* Content goes here */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='px-6 py-8 sm:p-10'>
                <h2 className='text-3xl font-extrabold text-gray-900'>
                  About Us
                </h2>
                <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white relative left-20 ml-10 mt-5'>
                  <img className='w-full' src={HEADER_LOGO} alt='error' />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-3xl mb-2'>janardhan</div>
                    <p className='text-gray-700 text-2xl  mb-2'>
                      janardhank134@gmail.com
                    </p>
                    <p className='text-gray-700 text-2xl '>phone: 9934567533</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <User
        name={"janardhan"}
        location={"narsipatnam"}
        contact={"janardhank134@gmail.com"}
      />
      <UserClass
        name={"janardhan"}
        location={"narsipatnam"}
        contact={"janardhank134@gmail.com"}
      /> */}
    </div>
  );
};
export default About;
