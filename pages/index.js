
import toast from 'react-hot-toast';
export default function Home() {

  return (
    <div>
    <button className='rounded-full' onClick={() => toast.success('Hello World')}>
      Hello World
    </button>
  </div>
  )
}
