const Footer = () => {
  return /* html */`
    <div class="w-full h-[600px] bg-black text-white px-10 py-6">
        <div class="">
            <p class="text-xl font-bold">Our top cities</p>
            <div class="flex justify-between mt-6 text-sm opacity-90">
                <ul class="grid gap-y-2">
                    <li>San</li>
                    <li>Miami</li>
                    <li>San Diego</li>
                    <li>East Bay</li>
                    <li>Long Beach</li>
                </ul>
                <ul class="grid gap-y-2">
                    <li>Los Angeles</li>
                    <li>Washington DC</li>
                    <li>Seattle</li>
                    <li>Portland</li>
                    <li>Nashville</li>
                </ul>
                <ul class="grid gap-y-2">
                    <li>New York City</li>
                    <li>Orange County</li>
                    <li>Atlanta</li>
                    <li>Charlotte</li>
                    <li>Denver</li>
                </ul>
                <ul class="grid gap-y-2">
                    <li>Chicago</li>
                    <li>Phoenix</li>
                    <li>Las Vegas</li>
                    <li>Sacramento</li>
                    <li>Oklahoma City</li>
                </ul>
                <ul class="grid gap-y-2">
                    <li>Columbus</li>
                    <li>New Mexico</li>
                    <li>Albuquerque</li>
                    <li>Sacramento</li>
                    <li>New Orleans</li>
                </ul>
            </div>
        </div>
        <hr class="my-10 opacity-50">
        <div class="flex justify-between">
            <div class="flex gap-20 mt-4 text-sm opacity-90">
                <ul class="grid gap-y-2">
                    <p class="text-xl font-bold mb-4">Company</p>
                    <li>About us</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
                <ul class="grid gap-y-2">
                    <p class="text-xl font-bold mb-4">Contact</p>
                    <li>Help & Support</li>
                    <li>Partner with us </li>
                    <li>Ride with us</li>
                </ul>
                <ul class="grid gap-y-2">
                    <p class="text-xl font-bold mb-4">Legal</p>
                    <li>Terms & Conditions</li>
                    <li>Refund & Cancellation</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div class="mt-4 mx-auto">
                <div class="">
                    <p>Follow us</p>
                    <div class="flex gap-2 mt-3 opacity-70">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                </div>
                <p class="my-4 text-sm opacity-90">Receive exclusive offers in your mailbox</p>
                <div class="">
                    <form>
                        <input class="rounded-md outline-none px-3 py-2 text-black" type="text" placeholder="Enter Your email">
                        <button class="rounded-md bg-yellow-600 px-4 py-2 hover:bg-yellow-500 shadow-md shadow-yellow-600">Subcribe</button>
                    </form>
                </div>
            </div>
        </div>
        <hr class="mt-10 opacity-50">
        <div class="flex justify-between mt-3 text-sm opacity-90 italic">
            <p class="">All rights Reserved copyright Your Company, 2021</p>
            <p class="">Made with by Themewagon</p>
        </div>
    </div>
  `
}

export default Footer