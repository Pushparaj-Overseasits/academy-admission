import StudentListList from 'components/StudentList/List.js';
export default function StudentList()
{
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
               <StudentListList />
            </div>
          </div>
           </>
      );
}