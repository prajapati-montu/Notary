import React from 'react'
import { Link } from 'react-router-dom'

export default function CreatePWEmp() {
    return (
        <>
            <div className='main-com'>
                <div className='col-md-6 login-img' style={{ background: 'burlywood' }}>
                    <img src='assets/img/login5.png' />
                </div>
                <div className='col-md-6 login-form' style={{ overflow: 'overlay', padding: '5% 0' }}>
                    <div className='container-fluid col-7'>
                        <h1>Welcome back</h1>
                        <div className='notarysvg mt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="44" viewBox="0 0 192 44" fill="none">
                                <path d="M32.0207 39.1955C30.9178 37.3249 29.8149 35.4505 28.7041 33.5838C27.4141 31.4162 26.0962 29.268 24.8381 27.085C24.4439 26.4023 24.0856 26.1246 23.1619 26.2056C21.1234 26.383 19.487 25.1874 18.9176 23.4094C18.3563 21.6699 19.1366 19.6374 20.7213 18.7002C22.2661 17.7861 24.5435 18.0561 25.8733 19.3057C27.2787 20.6286 27.5256 22.4645 26.5103 24.2425C26.1998 24.7824 25.6901 25.1797 26.156 25.9511C28.6364 30.0278 31.0571 34.1353 33.6172 38.4241C34.095 37.8109 33.9238 37.3095 33.8521 36.8737C32.8926 31.0344 33.1076 25.2298 34.5449 19.4908C34.8236 18.3839 34.302 18.0021 33.5416 17.5238C27.1951 13.5397 22.8235 7.88168 19.1247 1.62972C18.4638 0.515089 18.7425 0.272107 19.9568 0.140974C31.953 -1.17421 43.1927 6.85962 45.0241 18.1101C47.0069 30.29 39.0957 41.3553 26.7771 43.627C17.7192 45.3009 8.28713 41.2358 3.35807 33.5375C-1.49136 25.9626 -1.03747 16.0274 4.38927 8.89989C5.41251 7.55771 5.81862 7.62327 6.67065 9.06188C10.3655 15.3138 13.0928 21.8512 13.4869 29.1368C13.5267 29.8773 13.7537 30.3093 14.5221 30.5253C20.9084 32.3149 26.574 35.4158 31.6782 39.5272C31.7937 39.4153 31.9052 39.3074 32.0207 39.1955Z" fill="#164370" />
                                <path d="M26.7134 33.4951C23.0146 31.9717 19.5269 30.3248 15.8122 29.1986C15.1313 28.9903 15.1194 28.5198 15.0796 28.0107C14.4943 20.5361 11.5122 13.8714 7.60236 7.54233C6.8857 6.38528 7.14848 5.82603 8.14783 5.05852C11.2773 2.64798 11.2454 2.60556 13.2003 5.88774C15.1512 9.16221 17.0663 12.4598 19.0809 15.6957C19.71 16.7024 19.7817 17.2578 18.7983 18.2104C15.4857 21.4154 17.1101 26.7919 21.6769 27.6674C23.1938 27.9567 23.9343 28.6355 24.5555 29.8272C25.2164 31.0807 25.9888 32.2725 26.7134 33.4951Z" fill="#164370" />
                                <path d="M62.3753 17.512V32.1179H57.8125V9.37402H61.4834L73.5871 24.3656V9.40873H78.118V32.1218H74.3475L62.3753 17.512Z" fill="#164370" />
                                <path d="M93.0609 32.2799C91.3409 32.2799 89.7881 31.9598 88.3986 31.3196C87.0091 30.6793 85.8067 29.8077 84.7954 28.7085C83.7801 27.6093 82.9997 26.3712 82.4463 24.9943C81.8969 23.6174 81.6182 22.202 81.6182 20.7518C81.6182 19.236 81.9088 17.7897 82.4941 16.4128C83.0794 15.0359 83.8836 13.8094 84.9069 12.7295C85.9301 11.6496 87.1484 10.7972 88.5618 10.1686C89.9713 9.53989 91.5042 9.22363 93.1565 9.22363C94.8526 9.22363 96.4014 9.55532 97.8028 10.2148C99.2043 10.8782 100.399 11.7653 101.39 12.8722C102.382 13.983 103.146 15.221 103.687 16.5864C104.229 17.9517 104.5 19.3633 104.5 20.8135C104.5 22.3099 104.217 23.7447 103.656 25.1216C103.094 26.4985 102.298 27.7288 101.275 28.8049C100.251 29.8848 99.0371 30.7333 97.6396 31.3504C96.2421 31.9714 94.7172 32.2799 93.0609 32.2799ZM86.2486 20.7479C86.2486 21.7314 86.4039 22.6802 86.7105 23.5981C87.017 24.5161 87.4669 25.3337 88.0482 26.0472C88.6335 26.7646 89.3502 27.3277 90.1982 27.7443C91.0463 28.1608 92.0098 28.3691 93.0928 28.3691C94.2155 28.3691 95.199 28.1492 96.0351 27.7134C96.8712 27.2776 97.5839 26.6952 98.1691 25.9662C98.7544 25.2412 99.1884 24.4196 99.475 23.4979C99.7617 22.5799 99.9051 21.662 99.9051 20.7441C99.9051 19.7606 99.7498 18.8156 99.4432 17.9093C99.1326 17.0029 98.6827 16.1891 98.0855 15.4756C97.4883 14.7621 96.7756 14.1951 95.9355 13.7786C95.0954 13.362 94.1399 13.1538 93.0569 13.1538C91.9779 13.1538 91.0105 13.3736 90.1624 13.8094C89.3144 14.2491 88.5977 14.8238 88.0124 15.5373C87.4271 16.2547 86.9892 17.0646 86.6906 17.971C86.3999 18.8851 86.2486 19.8068 86.2486 20.7479Z" fill="#164370" />
                                <path d="M125.566 13.2502H118.092V32.1179H113.561V13.2502H106.021V9.37402H125.562V13.2502H125.566Z" fill="#164370" />
                                <path d="M134.89 9.37402H139.521L148.152 32.1179H143.458L141.507 26.4483H132.887L130.925 32.1179H126.23L134.89 9.37402ZM140.436 23.3436L137.207 13.9598L133.962 23.3436H140.436Z" fill="#164370" />
                                <path d="M150.764 32.1179V9.37402H161.179C162.238 9.37402 163.226 9.58615 164.137 10.0143C165.053 10.4424 165.845 11.017 166.518 11.7421C167.191 12.4672 167.709 13.281 168.071 14.1758C168.433 15.0745 168.617 15.9924 168.617 16.9296C168.617 17.89 168.445 18.8079 168.103 19.6834C167.761 20.5589 167.271 21.3341 166.63 22.0052C165.989 22.6763 165.24 23.197 164.38 23.5595L169.739 32.114H164.715L159.889 24.489H155.326V32.114H150.764V32.1179ZM155.326 20.6206H161.048C161.621 20.6206 162.127 20.4548 162.569 20.1231C163.011 19.7914 163.361 19.3479 163.628 18.7925C163.891 18.2371 164.026 17.62 164.026 16.9335C164.026 16.2277 163.871 15.599 163.564 15.0436C163.254 14.4882 162.871 14.0524 162.405 13.7284C161.94 13.4044 161.434 13.2463 160.885 13.2463H155.33V20.6206H155.326Z" fill="#164370" />
                                <path d="M175.397 9.37402L181.186 20.0729L187.07 9.37402H191.999L183.467 24.1728V32.1179H178.936V24.1111L170.472 9.37788H175.397V9.37402Z" fill="#164370" />
                            </svg>
                        </div>
                        <div className='form-fild mt-5'>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <div className='d-flex'>
                                        <input
                                            type="email"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                        />
                                        <button className="btn btn-cancel small-long" style={{ width: '50%', height: '46px' }}>Send OTP</button>
                                    </div>
                                    <div className='d-flex mt-1'>
                                        <input
                                            type="number"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                        />
                                        <button className="btn btn-cancel small-long" style={{ width: '50%', height: '46px' }}>Verify</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <div className='d-flex'>
                                        <input
                                            type="number"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter Your Phone Number"
                                        />
                                        <button className="btn btn-cancel small-long" style={{ width: '50%', height: '46px' }}>Send OTP</button>
                                    </div>
                                    <div className='d-flex mt-1'>
                                        <input
                                            type="number"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                        />
                                        <button className="btn btn-cancel small-long" style={{ width: '50%', height: '46px' }}>Verify</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <div className='d-flex'>
                                        <label className='col-5'>Password :</label>
                                        <input
                                            type="text"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter Your Password"
                                        />
                                    </div>
                                    <div className='d-flex mt-1'>
                                        <label className='col-5'>Confirm Password :</label>
                                        <input
                                            type="password"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter Your Password"
                                        />
                                    </div>
                                    <label>Note : <samp className='note-log'>Should be between 8-11 characters & should consist of atleast one A-Z.   A-Z & 0-9. at least one special character (!,@,#,$,^,*,(,),-) should be present.</samp></label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label>Password Recovery Question</label>
                                    <div className='d-flex'>
                                        <label className='col-4'>Hint Question :</label>
                                        <select
                                            name="pincode"
                                            id="pincode"
                                            className="form-select"
                                            required
                                            placeholder="pincode"
                                        >
                                            <option selected >Select Hint Question</option>
                                            <option value={'342450'}>What is your mother's maiden name?</option>
                                            <option value={'654321'}>What is your place of birth?</option>
                                            <option value={'684222'}>What was your first car?</option>
                                            <option value={'684222'}>What was your first pet?</option>
                                            <option value={'684222'}>What was your first school?</option>
                                        </select>
                                    </div>
                                    <div className='d-flex mt-1'>
                                        <label className='col-4'>Hint Answer :</label>
                                        <input
                                            type="text"
                                            name="user_id"
                                            className="form-control"
                                            placeholder="Enter Your Password"
                                        />
                                    </div>
                                    <label><samp className='note-log'>Make sure you remember your answer but it's hard for other to guess!</samp></label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-path">
                            <Link to={'/'} className="btn btn-cancel me-3">Back</Link>
                            <button type="submit" className="btn btn-submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
