import CourseAdd from 'components/Course/Add.js';
import CourseList from 'components/Course/List.js';
export default function Course()
{
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
               <CourseList />
            </div>
            <div className="w-full xl:w-4/12 px-4">
            <CourseAdd />
            </div>
          </div>
           </>
      );
}