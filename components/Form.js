import styles from '../styles/Form.module.css'

export default function Form() {
    return (
        <div class="w-full max-w-xs">
            <form action="/api/form" method="post" class="bg-white shadow-md rounded px-8 pt-5 pb-7 mb-3">
                <div class="mb-3">
                    <label required class="block text-gray-700 text-sm font-bold mb-2" for="account">
                        Please choose your account type:
                    </label>
                    <select required id="account" name="account">
                        <option value="Patient">Patient</option>
                        <option value="Caregiver">Caregiver</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="first">
                        First Name
                    </label>
                    <input minlength="3" maxlength="30" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" name="first" type="text" placeholder="First Name" />
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="last">
                        Last Name
                    </label>
                    <input minlength="3" maxlength="30"  required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last" name="last" type="text" placeholder="Last Name" />
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input minlength="3" maxlength="30" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email Address" />
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 text-sm font-bold" for="password">
                        Password
                    </label>
                    <input minlength="5" maxlength="25" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" title="Enter a valid password containing at least 1 number and 1 special character." pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{5,}$" />
                </div>
                <div class="flex items-center justify-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2022 Hasan Slater. All rights reserved.
            </p>
        </div>
    )
}