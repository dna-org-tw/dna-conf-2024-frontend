import React from "react";

interface ITransportProps {
  location?: string;
  address?: string;
  detail?: string;
}

const Transportation = (props: ITransportProps) => {
  const { location = "", address = "", detail = ""} = props;
    return (
        <div className="min-w-full min-h-0 md:px-20 py-10 self-center">
            <h3 className="font-bold md:text-2xl mb-1">
                {location}
            </h3>
            <h4 className="mb-5">
                {address}
            </h4>
            <p className="mb-11">
                {detail}
            </p>
            <div className="relative mx-auto" style={{ paddingTop: '50%' }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.865864483155!2d121.51618347500715!3d25.038625777813408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a975c13ae63d%3A0x99f529730969be7f!2z6LKh5ZyY5rOV5Lq65by15qau55m85Z-66YeR5pyD!5e0!3m2!1szh-TW!2sus!4v1710082088559!5m2!1szh-TW!2sus"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Transportation;
