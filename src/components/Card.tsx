export default function Card() {

    return (
        <div>
            <article
  className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
>
  <div
    className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
  >
    <span className="text-xs font-medium"> 67.81% </span>
  </div>
  <img src="https://www.shutterstock.com/image-illustration/cow-isolated-on-white-background-260nw-1497503726.jpg"  />
  <div>
    <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

    <p>
      <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

      <span className="text-xs text-gray-500"> from $240.94 </span>
    </p>
  </div>
</article>
<article
  className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
>
  <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
    

    <span className="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

    <p>
      <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

      <span className="text-xs text-gray-500"> from $404.32 </span>
    </p>
  </div>
</article>
        </div>
    )
}