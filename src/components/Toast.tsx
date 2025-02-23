import { useCallback, useEffect } from 'react'

interface ToastProps {
  toastlist: { id: number; backgroundColor: string; title: string; description: string }[];
  position: string;
  setList: (list: { id: number; backgroundColor: string; title: string; description: string }[]) => void;
}


const Toast: React.FC<ToastProps> = ({ toastlist, setList }) => {

const deleteToast = useCallback((id: number) => {
    const toastListItem: { id: number; backgroundColor: string; title: string; description: string }[] = toastlist.filter(e => e.id !== id);
    setList(toastListItem);
}, [toastlist, setList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [toastlist, deleteToast]);

  return (
    <div className={` flex   items-center justify-center`}>
      {
        toastlist.map((toast, i) => (
          <div
            key={i}
            className={`flex border border-red-500 rounded-xl items-center justify-between  px-8 p-4 my-2  shadow-md text-white`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <div className=' w-full space-x-4 text-sm text-red-500 flex items-center'>
              <p >{toast.title}</p>
            <button className='text-2xl' onClick={() => deleteToast(toast.id)}>X</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Toast