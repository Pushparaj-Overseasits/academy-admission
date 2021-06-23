import SessionAdd from 'components/Session/Add.js';
import SessionList from 'components/Session/List.js';
export default function Session()
{
    return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
               <SessionList />
            </div>
            <div className="w-full xl:w-4/12 px-4">
            <SessionAdd />
            </div>
          </div>
           </>
      );
}