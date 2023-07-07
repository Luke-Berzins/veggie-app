import Interactive from '@/clientComponents/Interactive'



export default function Home() {
  return (
    <main className="flex flex-col items-center border-black-800 h-screen w-screen overflow-x-hidden">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight py-12 text-gray-900 md:text-6xl lg:text-6xl dark:text-white"><mark 
            className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Cowculator</mark></h1>
      <Interactive />
    </main>
  )
}
