import Footer from "../components/Footer"
import Header from "../components/Header"

const HomePages = () => {
  return /* html */`
  ${Header()}
  <div class="">
  <!-- Banner -->
    <div class="bg-amber-400 h-[633px] flex px-36 justify-between">
      <div class="ml-14 w-2/3 h-96 mt-24">
        <div class="mb-6">
          <p class="text-6xl text-white font-bold mb-6">Are you starving?</p>
          <p class="opacity-80">Within a few clicks, find meals that are accessible near you</p>
        </div>
        <div class="w-2/3 bg-white rounded-2xl p-4">
          <div class="flex gap-3 font-bold">
            <p class="border-none rounded-xl hover:bg-red-100 px-4 py-2 cursor-pointer"><ion-icon name="bicycle-outline"></ion-icon> Delivery</p>
            <p class="border-none rounded-xl hover:bg-red-100 px-4 py-2 cursor-pointer"><ion-icon name="bag-handle"></ion-icon> Pickup</p>
          </div>
          <hr class="my-3">
          <div class="flex gap-2">
          <input class="w-3/4 bg-gray-100 rounded-[8px] outline-none px-4 py-3 text-black" type="text" placeholder="Enter Your Adress">
          <button class="rounded-xl text-white font-bold bg-red-500 px-4 py-2 hover:bg-red-700 shadow-md shadow-red-600 flex items-center gap-1"><ion-icon name="search"></ion-icon> Find Food</button>
          </div>
        </div>
      </div>
      <div class="mt-64">
        <img class="w-82 h-72 mr-20" src="https://goeco.link/VsqSm">
      </div>
    </div>
    <!-- Danh mục "Food sale" -->
    <div class="bg-white flex my-12 container mx-auto gap-3">
      <div class="w-1/4">
        <img class="w-full rounded-xl mb-4" src="https://goeco.link/gINLVe"/>
        <p class="font-bold">Greys Vage</p>
        <p class="px-3 py-1 bg-red-100 w-max rounded-md text-orange-500 font-bold">6 Days Remaining</p>
      </div>
      <div class="w-1/4">
        <img class="w-full rounded-xl mb-4" src="https://goeco.link/XlfQj"/>
        <p class="font-bold">Greys Vage</p>
        <p class="px-3 py-1 bg-red-100 w-max rounded-md text-orange-500 font-bold">6 Days Remaining</p>
      </div>
      <div class="w-1/4">
        <img class="w-full rounded-xl mb-4" src="https://goeco.link/fDnPb"/>
        <p class="font-bold">Greys Vage</p>
        <p class="px-3 py-1 bg-red-100 w-max rounded-md text-orange-500 font-bold">6 Days Remaining</p>
      </div>
      <div class="w-1/4">
        <img class="w-full rounded-xl mb-4" src="https://goeco.link/EHNNF"/>
        <p class="font-bold">Greys Vage</p>
        <p class="px-3 py-1 bg-red-100 w-max rounded-md text-orange-500 font-bold">6 Days Remaining</p>
      </div>
    </div>
    <!-- Danh mục "How does it word" -> "Featured Restaurants" -->
    <div class="py-12">
      <div class="bg-gradient-to-b from-orange-100 to-transparent"> <!-- Danh mục "How does it word" -->
        <p class="text-center py-14 text-5xl tracking-[1px] font-bold text-orange-500">How does it work</p>
        <div class="container mx-auto flex gap-3 justify-between text-center">
          <div class="w-1/4">
            <img class="w-2/4 h-[219px] mx-auto rounded-xl mb-4" src="https://goeco.link/NIgBj"/>
            <p class="font-bold">Select location</p>
            <p class="opacity-80">Choose the location where your food will be delivered.</p>
          </div>
          <div class="w-1/4">
            <img class="w-2/4 h-[219px] mx-auto rounded-xl mb-4" src="https://goeco.link/gpsUo"/>
            <p class="font-bold">Choose order</p>
            <p class="opacity-80">Check over hundreds of menus to pick your favorite food</p>
          </div>
          <div class="w-1/4">
            <img class="ww-2/4 h-[219px] mx-auto rounded-xl mb-4" src="https://goeco.link/kQhuZ"/>
            <p class="font-bold">Pay advanced</p>
            <p class="opacity-80">It's quick, safe, and simple. Select several methods of payment</p>
          </div>
          <div class="w-1/4">
            <img class="w-2/4 h-[219px] mx-auto rounded-xl mb-4" src="https://goeco.link/PPTxN"/>
            <p class="font-bold">Enjoy meals</p>
            <p class="opacity-80">Food is made and delivered directly to your home.</p>
          </div>
        </div>
      </div>
      <!-- Danh mục "Popular items" -->
      <div class="">
          <p class="text-center py-14 text-5xl tracking-[1px] font-bold">Popular items</p>
          <div class="flex relative w-full top-32">
            <p class="absolute left-24 text-4xl text-white font-bold w-16 h-16 text-center px-3 py-2 bg-orange-400 rounded-full hover:bg-orange-700 cursor-pointer"><</p>
            <p class="absolute right-24 text-4xl text-white font-bold w-16 h-16 text-center px-3 py-2 bg-orange-400 rounded-full hover:bg-orange-700 cursor-pointer">></p>
          </div>
          <div class="grid grid-cols-5 container mx-auto gap-1">
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <p class="font-bold">Cheese Burger</p>
              <p class="text-orange-500">Burger Arena</p>
              <p class="font-bold">$3.88</p>
              <button class="rounded-xl text-white font-bold bg-orange-500 px-4 py-2 text-center hover:bg-orange-700 shadow-md shadow-orange-600 w-full mx-auto"> Order Now</button>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/DPxyS"/>
              <p class="font-bold">Toffe’s Cake</p>
              <p class="text-orange-500">Top Sticks</p>
              <p class="font-bold">$4.00</p>
              <button class="rounded-xl text-white font-bold bg-orange-500 px-4 py-2 text-center hover:bg-orange-700 shadow-md shadow-orange-600 w-full mx-auto"> Order Now</button>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/qYbmn"/>
              <p class="font-bold">Dancake</p>
              <p class="text-orange-500">Cake World</p>
              <p class="font-bold">$1.99</p>
              <button class="rounded-xl text-white font-bold bg-orange-500 px-4 py-2 text-center hover:bg-orange-700 shadow-md shadow-orange-600 w-full mx-auto"> Order Now</button>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/hoezC"/>
              <p class="font-bold">Crispy Sandwitch</p>
              <p class="text-orange-500">Fastfood Dine</p>
              <p class="font-bold">$3.00</p>
              <button class="rounded-xl text-white font-bold bg-orange-500 px-4 py-2 text-center hover:bg-orange-700 shadow-md shadow-orange-600 w-full mx-auto"> Order Now</button>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/pJKPt"/>
              <p class="font-bold">Thai  Soup</p>
              <p class="text-orange-500">Foody man</p>
              <p class="font-bold">$2.79</p>
              <button class="rounded-xl text-white font-bold bg-orange-500 px-4 py-2 text-center hover:bg-orange-700 shadow-md shadow-orange-600 w-full mx-auto"> Order Now</button>
            </div>
          </div>
      </div>
    </div>
      <!-- Danh mục "Featured Restaurants" dài quá :)) -->
    <div class="my-6">
          <p class="text-center py-14 text-5xl tracking-[1px] font-bold">Featured Restaurants</p>
          <div class="grid grid-cols-4 container mx-auto gap-1">
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
            <div class="px-4 py-2 grid gap-y-2">
              <img class="w-full mx-auto rounded-xl mb-4" src="https://goeco.link/YFMuj"/>
              <div class="flex gap-2">
                <img class="w-1/4 bg-blue-400" src="https://goeco.link/zGMLg"/>
                <div class="">
                  <p class="font-bold">Foodworld</p>
                  <button class="text-yellow"><ion-icon name="star"></ion-icon> 46</button>
                </div>
              </div>
              <p class="rounded-2xl text-orange-700 font-bold bg-orange-100 px-4 flex items-center text-center w-2/5"> Order Now</p>
            </div>
          </div>
      </div>
    </div>
  </div>
    ${Footer()}
  `
}

export default HomePages