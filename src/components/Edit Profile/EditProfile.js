import { useEffect } from "react";
import * as userService from "../../services/userService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useReducer } from "react";
import { initialState, reducer } from "./data/data";
import { changeHandler } from "./utils/utils";

export function EditProfile() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        userService.getUser(user._id)
            .then(user => {
                for (let key in user) {
                    dispatch({ type: 'SET_FIELD', field: key, value: user[key] });
                }
            });
    }, [user._id]);

    const [state, dispatch] = useReducer(reducer, initialState);

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        console.log(data);
    }

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="editing-info">
                    <h5 className="f-title">
                        <i className="ti-info-alt" /> Edit Basic Information
                    </h5>
                    <form onSubmit={(ev) => submitHandler(ev, state)}>
                        <div className="form-group half">
                            <input
                                type="text"
                                id="firstName"
                                required="required"
                                name="firstName"
                                value={state.firstName}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="firstName">
                                First Name
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group half">
                            <input
                                type="text"
                                required="required"
                                id="lastName"
                                name="lastName"
                                value={state.lastName}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="lastName">
                                Last Name
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required="required"
                                value={state.email}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="email">
                                Email
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required="required"
                                value={state.phone}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="phone">
                                Phone
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="dob">
                            <div className="form-group">
                                <select
                                    name="day"
                                    value={state.day}
                                    onChange={(ev) => changeHandler(ev, dispatch)}
                                >
                                    <option>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    name="month"
                                    value={state.month}
                                    onChange={(ev) => changeHandler(ev, dispatch)}
                                >
                                    <option>Month</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>Jun</option>
                                    <option>Jul</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    name="year"
                                    value={state.year}
                                    onChange={(ev) => changeHandler(ev, dispatch)}
                                >
                                    <option>Year</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-radio">
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={state.gender === "male"}
                                        onChange={(ev) => changeHandler(ev, dispatch)}
                                        name="gender"
                                    />
                                    <i className="check-box" />
                                    Male
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={state.gender === "female"}
                                        onChange={(ev) => changeHandler(ev, dispatch)}
                                    />
                                    <i className="check-box" />
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="city"
                                required="required"
                                value={state.city}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="input">
                                City
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <select
                                name="country"
                                value={state.country}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            >
                                <option>Country</option>
                                <option defaultValue="AFG">Afghanistan</option>
                                <option defaultValue="ALA">Ƭand Islands</option>
                                <option defaultValue="ALB">Albania</option>
                                <option defaultValue="DZA">Algeria</option>
                                <option defaultValue="ASM">American Samoa</option>
                                <option defaultValue="AND">Andorra</option>
                                <option defaultValue="AGO">Angola</option>
                                <option defaultValue="AIA">Anguilla</option>
                                <option defaultValue="ATA">Antarctica</option>
                                <option defaultValue="ATG">Antigua and Barbuda</option>
                                <option defaultValue="ARG">Argentina</option>
                                <option defaultValue="ARM">Armenia</option>
                                <option defaultValue="ABW">Aruba</option>
                                <option defaultValue="AUS">Australia</option>
                                <option defaultValue="AUT">Austria</option>
                                <option defaultValue="AZE">Azerbaijan</option>
                                <option defaultValue="BHS">Bahamas</option>
                                <option defaultValue="BHR">Bahrain</option>
                                <option defaultValue="BGD">Bangladesh</option>
                                <option defaultValue="BRB">Barbados</option>
                                <option defaultValue="BLR">Belarus</option>
                                <option defaultValue="BEL">Belgium</option>
                                <option defaultValue="BLZ">Belize</option>
                                <option defaultValue="BEN">Benin</option>
                                <option defaultValue="BMU">Bermuda</option>
                                <option defaultValue="BTN">Bhutan</option>
                                <option defaultValue="BOL">Bolivia, Plurinational State of</option>
                                <option defaultValue="BES">Bonaire, Sint Eustatius and Saba</option>
                                <option defaultValue="BIH">Bosnia and Herzegovina</option>
                                <option defaultValue="BWA">Botswana</option>
                                <option defaultValue="BVT">Bouvet Island</option>
                                <option defaultValue="BRA">Brazil</option>
                                <option defaultValue="IOT">British Indian Ocean Territory</option>
                                <option defaultValue="BRN">Brunei Darussalam</option>
                                <option defaultValue="BGR">Bulgaria</option>
                                <option defaultValue="BFA">Burkina Faso</option>
                                <option defaultValue="BDI">Burundi</option>
                                <option defaultValue="KHM">Cambodia</option>
                                <option defaultValue="CMR">Cameroon</option>
                                <option defaultValue="CAN">Canada</option>
                                <option defaultValue="CPV">Cape Verde</option>
                                <option defaultValue="CYM">Cayman Islands</option>
                                <option defaultValue="CAF">Central African Republic</option>
                                <option defaultValue="TCD">Chad</option>
                                <option defaultValue="CHL">Chile</option>
                                <option defaultValue="CHN">China</option>
                                <option defaultValue="CXR">Christmas Island</option>
                                <option defaultValue="CCK">Cocos (Keeling) Islands</option>
                                <option defaultValue="COL">Colombia</option>
                                <option defaultValue="COM">Comoros</option>
                                <option defaultValue="COG">Congo</option>
                                <option defaultValue="COD">Congo, the Democratic Republic of the</option>
                                <option defaultValue="COK">Cook Islands</option>
                                <option defaultValue="CRI">Costa Rica</option>
                                <option defaultValue="CIV">C𴥠d'Ivoire</option>
                                <option defaultValue="HRV">Croatia</option>
                                <option defaultValue="CUB">Cuba</option>
                                <option defaultValue="CUW">Cura袯</option>
                                <option defaultValue="CYP">Cyprus</option>
                                <option defaultValue="CZE">Czech Republic</option>
                                <option defaultValue="DNK">Denmark</option>
                                <option defaultValue="DJI">Djibouti</option>
                                <option defaultValue="DMA">Dominica</option>
                                <option defaultValue="DOM">Dominican Republic</option>
                                <option defaultValue="ECU">Ecuador</option>
                                <option defaultValue="EGY">Egypt</option>
                                <option defaultValue="SLV">El Salvador</option>
                                <option defaultValue="GNQ">Equatorial Guinea</option>
                                <option defaultValue="ERI">Eritrea</option>
                                <option defaultValue="EST">Estonia</option>
                                <option defaultValue="ETH">Ethiopia</option>
                                <option defaultValue="FLK">Falkland Islands (Malvinas)</option>
                                <option defaultValue="FRO">Faroe Islands</option>
                                <option defaultValue="FJI">Fiji</option>
                                <option defaultValue="FIN">Finland</option>
                                <option defaultValue="FRA">France</option>
                                <option defaultValue="GUF">French Guiana</option>
                                <option defaultValue="PYF">French Polynesia</option>
                                <option defaultValue="ATF">French Southern Territories</option>
                                <option defaultValue="GAB">Gabon</option>
                                <option defaultValue="GMB">Gambia</option>
                                <option defaultValue="GEO">Georgia</option>
                                <option defaultValue="DEU">Germany</option>
                                <option defaultValue="GHA">Ghana</option>
                                <option defaultValue="GIB">Gibraltar</option>
                                <option defaultValue="GRC">Greece</option>
                                <option defaultValue="GRL">Greenland</option>
                                <option defaultValue="GRD">Grenada</option>
                                <option defaultValue="GLP">Guadeloupe</option>
                                <option defaultValue="GUM">Guam</option>
                                <option defaultValue="GTM">Guatemala</option>
                                <option defaultValue="GGY">Guernsey</option>
                                <option defaultValue="GIN">Guinea</option>
                                <option defaultValue="GNB">Guinea-Bissau</option>
                                <option defaultValue="GUY">Guyana</option>
                                <option defaultValue="HTI">Haiti</option>
                                <option defaultValue="HMD">Heard Island and McDonald Islands</option>
                                <option defaultValue="VAT">Holy See (Vatican City State)</option>
                                <option defaultValue="HND">Honduras</option>
                                <option defaultValue="HKG">Hong Kong</option>
                                <option defaultValue="HUN">Hungary</option>
                                <option defaultValue="ISL">Iceland</option>
                                <option defaultValue="IND">India</option>
                                <option defaultValue="IDN">Indonesia</option>
                                <option defaultValue="IRN">Iran, Islamic Republic of</option>
                                <option defaultValue="IRQ">Iraq</option>
                                <option defaultValue="IRL">Ireland</option>
                                <option defaultValue="IMN">Isle of Man</option>
                                <option defaultValue="ISR">Israel</option>
                                <option defaultValue="ITA">Italy</option>
                                <option defaultValue="JAM">Jamaica</option>
                                <option defaultValue="JPN">Japan</option>
                                <option defaultValue="JEY">Jersey</option>
                                <option defaultValue="JOR">Jordan</option>
                                <option defaultValue="KAZ">Kazakhstan</option>
                                <option defaultValue="KEN">Kenya</option>
                                <option defaultValue="KIR">Kiribati</option>
                                <option defaultValue="PRK">
                                    Korea, Democratic People's Republic of
                                </option>
                                <option defaultValue="KOR">Korea, Republic of</option>
                                <option defaultValue="KWT">Kuwait</option>
                                <option defaultValue="KGZ">Kyrgyzstan</option>
                                <option defaultValue="LAO">Lao People's Democratic Republic</option>
                                <option defaultValue="LVA">Latvia</option>
                                <option defaultValue="LBN">Lebanon</option>
                                <option defaultValue="LSO">Lesotho</option>
                                <option defaultValue="LBR">Liberia</option>
                                <option defaultValue="LBY">Libya</option>
                                <option defaultValue="LIE">Liechtenstein</option>
                                <option defaultValue="LTU">Lithuania</option>
                                <option defaultValue="LUX">Luxembourg</option>
                                <option defaultValue="MAC">Macao</option>
                                <option defaultValue="MKD">
                                    Macedonia, the former Yugoslav Republic of
                                </option>
                                <option defaultValue="MDG">Madagascar</option>
                                <option defaultValue="MWI">Malawi</option>
                                <option defaultValue="MYS">Malaysia</option>
                                <option defaultValue="MDV">Maldives</option>
                                <option defaultValue="MLI">Mali</option>
                                <option defaultValue="MLT">Malta</option>
                                <option defaultValue="MHL">Marshall Islands</option>
                                <option defaultValue="MTQ">Martinique</option>
                                <option defaultValue="MRT">Mauritania</option>
                                <option defaultValue="MUS">Mauritius</option>
                                <option defaultValue="MYT">Mayotte</option>
                                <option defaultValue="MEX">Mexico</option>
                                <option defaultValue="FSM">Micronesia, Federated States of</option>
                                <option defaultValue="MDA">Moldova, Republic of</option>
                                <option defaultValue="MCO">Monaco</option>
                                <option defaultValue="MNG">Mongolia</option>
                                <option defaultValue="MNE">Montenegro</option>
                                <option defaultValue="MSR">Montserrat</option>
                                <option defaultValue="MAR">Morocco</option>
                                <option defaultValue="MOZ">Mozambique</option>
                                <option defaultValue="MMR">Myanmar</option>
                                <option defaultValue="NAM">Namibia</option>
                                <option defaultValue="NRU">Nauru</option>
                                <option defaultValue="NPL">Nepal</option>
                                <option defaultValue="NLD">Netherlands</option>
                                <option defaultValue="NCL">New Caledonia</option>
                                <option defaultValue="NZL">New Zealand</option>
                                <option defaultValue="NIC">Nicaragua</option>
                                <option defaultValue="NER">Niger</option>
                                <option defaultValue="NGA">Nigeria</option>
                                <option defaultValue="NIU">Niue</option>
                                <option defaultValue="NFK">Norfolk Island</option>
                                <option defaultValue="MNP">Northern Mariana Islands</option>
                                <option defaultValue="NOR">Norway</option>
                                <option defaultValue="OMN">Oman</option>
                                <option defaultValue="PAK">Pakistan</option>
                                <option defaultValue="PLW">Palau</option>
                                <option defaultValue="PSE">Palestinian Territory, Occupied</option>
                                <option defaultValue="PAN">Panama</option>
                                <option defaultValue="PNG">Papua New Guinea</option>
                                <option defaultValue="PRY">Paraguay</option>
                                <option defaultValue="PER">Peru</option>
                                <option defaultValue="PHL">Philippines</option>
                                <option defaultValue="PCN">Pitcairn</option>
                                <option defaultValue="POL">Poland</option>
                                <option defaultValue="PRT">Portugal</option>
                                <option defaultValue="PRI">Puerto Rico</option>
                                <option defaultValue="QAT">Qatar</option>
                                <option defaultValue="REU">R궮ion</option>
                                <option defaultValue="ROU">Romania</option>
                                <option defaultValue="RUS">Russian Federation</option>
                                <option defaultValue="RWA">Rwanda</option>
                                <option defaultValue="BLM">Saint Barthꭥmy</option>
                                <option defaultValue="SHN">
                                    Saint Helena, Ascension and Tristan da Cunha
                                </option>
                                <option defaultValue="KNA">Saint Kitts and Nevis</option>
                                <option defaultValue="LCA">Saint Lucia</option>
                                <option defaultValue="MAF">Saint Martin (French part)</option>
                                <option defaultValue="SPM">Saint Pierre and Miquelon</option>
                                <option defaultValue="VCT">Saint Vincent and the Grenadines</option>
                                <option defaultValue="WSM">Samoa</option>
                                <option defaultValue="SMR">San Marino</option>
                                <option defaultValue="STP">Sao Tome and Principe</option>
                                <option defaultValue="SAU">Saudi Arabia</option>
                                <option defaultValue="SEN">Senegal</option>
                                <option defaultValue="SRB">Serbia</option>
                                <option defaultValue="SYC">Seychelles</option>
                                <option defaultValue="SLE">Sierra Leone</option>
                                <option defaultValue="SGP">Singapore</option>
                                <option defaultValue="SXM">Sint Maarten (Dutch part)</option>
                                <option defaultValue="SVK">Slovakia</option>
                                <option defaultValue="SVN">Slovenia</option>
                                <option defaultValue="SLB">Solomon Islands</option>
                                <option defaultValue="SOM">Somalia</option>
                                <option defaultValue="ZAF">South Africa</option>
                                <option defaultValue="SGS">
                                    South Georgia and the South Sandwich Islands
                                </option>
                                <option defaultValue="SSD">South Sudan</option>
                                <option defaultValue="ESP">Spain</option>
                                <option defaultValue="LKA">Sri Lanka</option>
                                <option defaultValue="SDN">Sudan</option>
                                <option defaultValue="SUR">Suriname</option>
                                <option defaultValue="SJM">Svalbard and Jan Mayen</option>
                                <option defaultValue="SWZ">Swaziland</option>
                                <option defaultValue="SWE">Sweden</option>
                                <option defaultValue="CHE">Switzerland</option>
                                <option defaultValue="SYR">Syrian Arab Republic</option>
                                <option defaultValue="TWN">Taiwan, Province of China</option>
                                <option defaultValue="TJK">Tajikistan</option>
                                <option defaultValue="TZA">Tanzania, United Republic of</option>
                                <option defaultValue="THA">Thailand</option>
                                <option defaultValue="TLS">Timor-Leste</option>
                                <option defaultValue="TGO">Togo</option>
                                <option defaultValue="TKL">Tokelau</option>
                                <option defaultValue="TON">Tonga</option>
                                <option defaultValue="TTO">Trinidad and Tobago</option>
                                <option defaultValue="TUN">Tunisia</option>
                                <option defaultValue="TUR">Turkey</option>
                                <option defaultValue="TKM">Turkmenistan</option>
                                <option defaultValue="TCA">Turks and Caicos Islands</option>
                                <option defaultValue="TUV">Tuvalu</option>
                                <option defaultValue="UGA">Uganda</option>
                                <option defaultValue="UKR">Ukraine</option>
                                <option defaultValue="ARE">United Arab Emirates</option>
                                <option defaultValue="GBR">United Kingdom</option>
                                <option defaultValue="USA">
                                    United States
                                </option>
                                <option defaultValue="UMI">United States Minor Outlying Islands</option>
                                <option defaultValue="URY">Uruguay</option>
                                <option defaultValue="UZB">Uzbekistan</option>
                                <option defaultValue="VUT">Vanuatu</option>
                                <option defaultValue="VEN">Venezuela, Bolivarian Republic of</option>
                                <option defaultValue="VNM">Viet Nam</option>
                                <option defaultValue="VGB">Virgin Islands, British</option>
                                <option defaultValue="VIR">Virgin Islands, U.S.</option>
                                <option defaultValue="WLF">Wallis and Futuna</option>
                                <option defaultValue="ESH">Western Sahara</option>
                                <option defaultValue="YEM">Yemen</option>
                                <option defaultValue="ZMB">Zambia</option>
                                <option defaultValue="ZWE">Zimbabwe</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea
                                rows={4}
                                id="textarea"
                                required="required"
                                name="about"
                                value={state.about}
                                onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                            <label className="control-label" htmlFor="textarea">
                                About Me
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="submit-btns">
                            <button type="button" className="mtr-btn">
                                <span>Cancel</span>
                            </button>
                            <button type="submit" className="mtr-btn">
                                <span>Update</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}