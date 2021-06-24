import CourseAdd from 'components/Course/Add.js';
import CourseList from 'components/Course/List.js';
import React from 'react';
export default function Course()
{
    const [course, setCourse] = React.useState({});
    const saveId = (value) => {
      setCourse(value);
    };
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
               {/* This saveId is updating the course state */}
               <CourseList saveId={saveId} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {/* Even after course state gets updated this CourseAdd does not rerenders */}
              <CourseAdd course={course} />
            </div>
          </div>
           </>
      );
}