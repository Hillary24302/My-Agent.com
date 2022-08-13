import "./Write.css"

export default function Write() {
    return (
        <div className ="write">
            <form className ="writeForm">
                <div class="writeTitle">
                    POST ADVERT
                </div>
                <div className="writetitlespace">
                        <div className="writespace">
                            <input type="text" placeholder="Title*" className ="spaceinput" autoFocus={true} />
                        </div>
                        <div className ="writespace">
                            <textarea placeholder="Property Description*" type="text" className="writetext"></textarea>
                        </div>
                        <div className ="writespace">
                            <textarea placeholder="Address*" type="text" className="writetext"></textarea>
                        </div>
                </div>
                <div className="writerow">
                    <div className="writeselection">
                        <label className="writelebel">Property Type*</label>
                        <div>
                            <input type="radio" className="writeradio" id="sale" name="drone" value="sale"
                                checked/>
                            <label className="writelabelfor" for="sale">Sale</label>
                        </div>

                        <div>
                            <input type="radio" className="writeradio" id="rent" name="drone" value="rent"/>
                            <label className="writelabelfor" for="rent">Rent</label>
                        </div>
                    </div>
                    <div className="writecheck">
                        <form className="selectform" action="">
                            <label className="writelebel" for="properties">Select Category:*</label>
                            <div className="selectoptions">
                                <select className="selectinput" name="properties" id="properties">
                                    <option className="writeoptions" value="guest">Guest House</option>
                                    <option className="writeoptions" value="house">House</option>
                                    <option className="writeoptions" value="flat">Flat</option>
                                    <option className="writeoptions" value="hotel">Hotel</option>
                                    <option className="writeoptions" value="land">Land</option>
                                    <option className="writeoptions" value="studio">Studio</option>
                                    <option className="writeoptions"  value="bangalow">Bangalow</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className ="writeFormGroup">
                    <label className="writelebel">Select Image to Uplpoad*</label>
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <div className="writecontact">
                    <form className="selectform" action="">
                            <label className="writelebel" for="properties">City:*</label>
                            <div className="selectoptions">
                                <select className="selectinputt" name="properties" id="properties">
                                    <option className="writeoptions" value="guest">Guest House</option>
                                    <option className="writeoptions" value="house">House</option>
                                    <option className="writeoptions" value="flat">Flat</option>
                                    <option className="writeoptions" value="hotel">Hotel</option>
                                    <option className="writeoptions" value="land">Land</option>
                                    <option className="writeoptions" value="studio">Studio</option>
                                    <option className="writeoptions"  value="bangalow">Bangalow</option>
                                </select>
                            </div>
                        </form>
                        <form className="selectform" action="">
                            <label className="writelebel" for="properties">Location:*</label>
                            <div className="selectoptions">
                                <select className="selectinput" name="properties" id="properties">
                                    <option className="writeoptions" value="guest">Guest House</option>
                                    <option className="writeoptions" value="house">House</option>
                                    <option className="writeoptions" value="flat">Flat</option>
                                    <option className="writeoptions" value="hotel">Hotel</option>
                                    <option className="writeoptions" value="land">Land</option>
                                    <option className="writeoptions" value="studio">Studio</option>
                                    <option className="writeoptions"  value="bangalow">Bangalow</option>
                                </select>
                            </div>
                        </form>
                </div>
                <div className="writephone">
                        <div className="writeprice">
                            <input name="price" className="priceinput" placeholder="Price*" type="number" value=""/>
                        </div>
                        <div className="writeprice">
                            <input name="price" className="priceinput" placeholder="Phone number*" type="number" value=""/>
                        </div>
                </div>
                <div className ="writeFormGroup">
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}
