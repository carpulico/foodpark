<!-- INCLUDE -->
<section id="fx-regisbox" class="px-regisbox ">

    <!-- Login -->
    <div id="fxRegisBox-login" class="px-regisbox-box role-main">


        <div class="">
            <div class="txt-center">
                <div class="obj-mc01">
                    <h1>ลงทะเบียนรับสิทธิพิเศษ</h1>

                    <div id="head-reigster-box" class="px-regisbox-wrapper">
                        <div class="form-group">
                            <button id="fx-mux01" type="button" class="btn btn-lg btn-fb" onclick="fbLogin();"><i class="fa fa-facebook"></i>&nbsp;ใช้ข้อมูลจากเฟสบุค</button>
                        </div>
                    </div>
                    <div class="px-regisbox-hr">
                        <hr>
                        <span>หรือ</span>
                    </div>
                    <div class="form-group" style="margin:32px 0 0;">

                        <form id="reigster-projects-3" method="post" class="px-regisbox-form">

                            <input type="hidden" name="campaign" value="urban-pulse-2016">
                            <input type="hidden" name="ads" value="0">
                            <input type="hidden" name="fbid" value="">
                            <input type="hidden" name="fbname" value="">
                            <input type="hidden" name="path" value="0">

                            <div class="px-regisbox-wrapper">

                                <div class="form-group">
                                    <input type="text" id="firstname" name="firstname" class="validate is_name" placeholder="ชื่อ (Name)" autocomplete="off" value="">
                                    <p class="txt-error txt-left hidden">กรุณากรอกชื่อ</p>
                                </div>

                                <div class="form-group">
                                    <input type="text" id="lastname" name="lastname" class="validate is_name" placeholder="นามสกุล (Surname)" autocomplete="off" value="">
                                    <p class="txt-error txt-left hidden">กรุณากรอกนามสกุล</p>
                                </div>

                                <div class="form-group">
                                    <input type="text" id="phone" name="phone" class="validate is_num" maxlength="10" placeholder="เบอร์โทรศัพท์ (Mobile No.)" autocomplete="off" value="">
                                    <p class="txt-error txt-left hidden">กรุณากรอกเบอร์โทรศัพท์</p>
                                </div>

                                <div class="form-group">
                                    <input type="text" id="email" name="email" class="validate" placeholder="อีเมล (E-mail)" autocomplete="off" value="">
                                    <p class="txt-error txt-left hidden">กรุณากรอกอีเมล</p>
                                </div>
                                <div class="text-left">
                                    <h4>กรุณาเลือกโครงการที่คุณสนใจ</h4>
                                    <div class="form-group group-checkbox">
                                        <input type="checkbox" name="projects[]" class="css-checkbox" value="ไอดิโอ โมบิ อโศก" id="ideo-c01">
                                        <label for="ideo-c01" class="css-label css-label-check">ไอดีโอ โมบิ อโศก</label>
                                    </div>
                                    <div class="form-group group-checkbox">
                                        <input type="checkbox" name="projects[]" class="css-checkbox" value="ไอดิโอ โมบิ สุขุมวิท 66" id="ideo-c02">
                                        <label for="ideo-c02" class="css-label css-label-check">ไอดีโอ โมบิ สุขุมวิท 66</label>
                                    </div>
                                    <div class="form-group group-checkbox">
                                        <input type="checkbox" name="projects[]" class="css-checkbox" value="ไอดิโอ สุขุมวิท 93" id="ideo-c03">
                                        <label for="ideo-c03" class="css-label css-label-check">ไอดีโอ สุขุมวิท 93</label>
                                    </div>
                                    <div class="form-group group-checkbox">
                                        <input type="checkbox" name="projects[]" class="css-checkbox" value="ไอดิโอ พหลโยธิน-จุตจักร" id="ideo-c04">
                                        <label for="ideo-c04" class="css-label css-label-check">ไอดีโอ พหลโยธิน-จุตจักร</label>
                                    </div>
                                    <div class="form-group group-checkbox">
                                        <input type="checkbox" name="projects[]" class="css-checkbox" value="ยูนิโอ นิด้า-เสรีไทย" id="unio-c05">
                                        <label for="unio-c05" class="css-label css-label-check">ยูนิโอ นิด้า-เสรีไทย</label>
                                    </div>
                                    <div class="footnote">
                                        *เลือกได้มากกว่า 1 โครงการ
                                    </div>
                                </div>
                                <div class="px-regisbox-apply apply">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-lg fx-callLandRegis">ลงทะเบียน</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<div id="preload">
    <div class="preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<!-- /INCLUDE -->