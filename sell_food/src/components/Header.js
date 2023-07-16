const Header = () => {
  return /* html */`
    <div class="flex h-16 pl-3 pr-12 relative">
        <div class="mx-auto absolute top-3 left-[45%]">
            <img class="w-full" src="https://goeco.link/abFLr">
        </div>
        <ul class="flex justify-end gap-5 items-center absolute top-5 right-[14%]">
            <li class="flex items-center"><ion-icon class="mr-1" name="menu-outline"></ion-icon> Category</li>
            <li class="flex items-center font-bold"><ion-icon class="mr-1 text-yellow-600" name="search-outline"></ion-icon> Search Food</li>
            <li class="flex items-center border-none outline-none px-2 rounded shadow-md shadow-yellow-300 text-yellow-600 cursor-pointer hover:bg-yellow-300 font-bold"><ion-icon class="mr-1" name="person"></ion-icon> Login</li>
            <li class="flex items-center"><ion-icon class="w-6 h-6" name="cart-outline"></ion-icon></li>
            
        </ul>
    </div>
  `
}

export default Header