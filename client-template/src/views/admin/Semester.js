import Semadd from 'components/Semester/Add.js';
import Semlist from 'components/Semester/List.js';
export default function Course()
{
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <Semlist />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              
              <Semadd/>
            </div>
          </div>
           </>
      );
}