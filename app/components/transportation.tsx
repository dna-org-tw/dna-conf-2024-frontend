import React from "react";


const transportation = () => {
    return (
        <div className="min-w-full min-w-60 md:px-20 py-10 self-center" style={{ height: '55vh'}}>
            <h3 className="font-bold md:text-2xl whitespace-nowrap mb-5 md:mb-0">張榮發基金會國際會議中心</h3>
            <h4 className="mb-5 whitespace-nowrap">100台北市中正區中山南路11號</h4>
            <p className="mb-11">
                張榮發基金會國際會議中心位於路網綿密、交通便利的中山南路上，正對凱達格蘭大道，緊鄰台大醫院及自由廣場
                (中正紀念堂)，距離台大醫院捷運站步行約5分鐘，至台北車站車程為5分鐘，同時備有地下停車場，可供中小型汽車停放。
            </p>
            <div className="relative h-0 w-full mapContainer">
                <iframe
                    className="absolute w-full min-h-56 md:min-h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.865864483155!2d121.51618347500715!3d25.038625777813408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a975c13ae63d%3A0x99f529730969be7f!2z6LKh5ZyY5rOV5Lq65by15qau55m85Z-66YeR5pyD!5e0!3m2!1szh-TW!2sus!4v1710082088559!5m2!1szh-TW!2sus"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default transportation;
