import CourseAndSessionAdd from 'components/CourseAndSession/Add.js';
import CourseAndSessionList from 'components/CourseAndSession/List.js';
export default function CourseAndSession()
{
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
               <CourseAndSessionList />
            </div>
            <div className="w-full xl:w-4/12 px-4">
            <CourseAndSessionAdd />
            </div>
          </div>
           </>
      );
}