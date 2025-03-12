export default function HeaderIcon({ icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-4 p-3 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500">
      <icon
        className={`h-4 md:w-5 md:h-5 text-gray-500 text-center sm:h-7 mx-auto hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}
