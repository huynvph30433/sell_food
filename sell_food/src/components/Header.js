const Header = () => {
  return /* html */`
    <div class="flex h-14 px-3 relative">
        <div class="mx-auto absolute top-2 left-1/2">
            <img class="w-full" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/361134019_286084487304981_9085966633620834367_n.png?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ADWb_bhrSwQAX9St86m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQdDYJu-LT9ORrQuwfpeBz8WZ9FCapqzaTDAQbYlZ8coA&oe=64D8B622">
        </div>
        <ul class="flex justify-end gap-5 items-center absolute top-4 right-10">
            <li class="flex items-center"><ion-icon class="mr-1" name="menu-outline"></ion-icon> Category</li>
            <li class="flex items-center font-bold"><ion-icon class="mr-1 text-yellow-600" name="search-outline"></ion-icon> Search Food</li>
            <li class="flex items-center border-none outline-none px-2 rounded-md shadow-md shadow-yellow-300 text-yellow-600 cursor-pointer hover:bg-yellow-300"><ion-icon class="mr-1" name="person"></ion-icon> Login</li>
            <li class="flex items-center"><ion-icon class="w-6 h-6" name="cart-outline"></ion-icon></li>
            
        </ul>
    </div>
  `
}

export default Header