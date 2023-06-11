import Todos from "@/pages/todo/page";

export const metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
    keywords: 'Dashboard'
};

const Dashboard = () => {
  return (
    <main className='relative  flex flex-col w-full lg:flex-row'>
            <Todos/>
    </main>
  )
}

export default Dashboard