import { Main } from "../sections";

const mainProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  image: { src: "/img/video.png", alt: '', height: 350, width: 250 },
  agencys: [
    {
      width: 320,
      title: "Brief",
      description: <>Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</>,
      image: { src: "/img/logo1.jpg", alt: "logo-1", width: 60, height: 60 },
      color: "#FAF9F9",
    },
    {
      width: 340,
      title: "Search",
      description: <>In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.</>,
      image: { src: "/img/logo2.jpg", alt: "logo-2", width: 60, height: 60 },
      color: "#F5F4F4", 
    },
    {
      width: 365,
      title: "Pitch",
      description: <>Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</>,
      image: { src: "/img/logo3.png", alt: "logo-3", width: 60, height: 60 },
      color: "#EFEFEF",
    }
  ]
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Main {...mainProps} />
      </div>
    </>
  );
}
