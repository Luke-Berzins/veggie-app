export default function Form() {

    return (
        <div className="flex flex-row content-evenly gap-12">
            <div>
            <label className="block text-xs font-medium text-gray-700">
                Age
            </label>
            <input
                type="input"
                id="age"
                placeholder="35"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
            
            </div>
            <div>
            <label className="block text-xs font-medium text-gray-700">
                Meals per week
            </label>
            <input
                type="input"
                id="age"
                placeholder="35"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
            </div>
        </div>
    )
}