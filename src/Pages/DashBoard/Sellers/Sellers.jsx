import './Sellers.css'
import { AiFillStar } from 'react-icons/ai'
import cod1 from '../../../assets/Home/Game/cod1.jpg'


const Sellers = () => {
    return (
        <div className='seller__container'>

            {/* search start */}

            <div class="relative md:w-2/3 pt-5 w-5/6 max-w-lg">
                <form>
                    <div class="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
                        <input type="text" class="block w-full flex-1 py-2 px-3 text-gray-700 focus:outline-none" placeholder="Search ..." />
                        <span class="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-2 py-2 hover:bg-indigo-700">
                            <svg class="text-white" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z" /></svg>
                        </span>
                    </div>
                </form>
                {/* <div class="absolute mt-2 w-full overflow-hidden rounded-md bg-white">
                    <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p class="text-sm font-medium text-gray-600">Button Ripple Effect</p>
                        <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                    </div>
                    <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p class="text-sm font-medium text-gray-600">Custom Radio Buttons</p>
                        <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                    </div>
                    <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p class="text-sm font-medium text-gray-600">Expand Images on Hover</p>
                        <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                    </div>
                    <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p class="text-sm font-medium text-gray-600">Custom Checkbox</p>
                        <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing...</p>
                    </div>
                </div> */}
            </div>

            {/* search end */}

            <h1 className='text-xl'>Top Ranking Sellers</h1>
            <div className="seller__container__carousel">
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>
                <div className="seller__container__card__con__card">

                    <div className='seller__container__card__con__card__desc'>
                        <img src={cod1} alt="" />
                        <div className="seller__container__card__con__card__desc__text">
                            <p>Sold 234 account </p>
                            <p>Made $858</p>
                        </div>
                    </div>
                    <div className='seller__container__card__con__card__stats'>
                        <p>Ashalav</p>
                        <p className="flex gap-1 items-center border-2 p-1 rounded-md border-sky-600"><AiFillStar className='seller__star' /> 5.7</p>
                    </div>
                </div>

            </div>


            <div className="seller__container__sellers">
                <div className="seller__container__sellers__left">
                    <h1 className='text-xl'>New Sellers</h1>
                    <div className='seller__container__sellers__list border-b-2 border-gray-400 p-1'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>$677</p>
                        <p className='flex items-center gap-1'> <AiFillStar className='seller__star' />4.5 </p>
                        <button type="button" class="text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                    <div className='seller__container__sellers__list border-b-2 border-gray-400 p-1'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>$677</p>
                        <p className='flex items-center gap-1'> <AiFillStar className='seller__star' />4.5 </p>
                        <button type="button" class="text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                    <div className='seller__container__sellers__list border-b-2 border-gray-400 p-1'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>$677</p>
                        <p className='flex items-center gap-1'> <AiFillStar className='seller__star' />4.5 </p>
                        <button type="button" class="text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>

                    </div>
                    <div className='seller__container__sellers__list border-b-2 border-gray-400 p-1'>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>$677</p>
                        <p className='flex items-center gap-1'> <AiFillStar className='seller__star' />4.5 </p>
                        <button type="button" class="text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                    <div className='seller__container__sellers__list '>
                        <img src={cod1} alt="" />
                        <p>Osas</p>
                        <p>$677</p>
                        <p className='flex items-center gap-1'> <AiFillStar className='seller__star' />4.5 </p>
                        <button type="button" class="text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                </div>

                <div className="seller__container__sellers__right">
                    <label class="cursor-pointer">
                        <input type="radio" class="peer sr-only" name="pricing" />
                        <div class="w-72 max-w-xl rounded-md bg-white p-5 text-sky-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-semibold uppercase text-gray-500">pro</p>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                    </div>
                                </div>
                                <div class="flex items-end justify-between">
                                    <p><span class="text-lg font-bold">Become</span> a seller</p>
                                    <p class="text-sm font-bold">$21 / mo</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <br />
                    <button className='hidden'>View your seller page</button>
                </div>
            </div>
        </div>
    )
}

export default Sellers