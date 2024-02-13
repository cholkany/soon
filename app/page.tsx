import Image from "next/image";

const logo = "/logo.png";

export default function Home() {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">

    {/*!-- Hero section -->*/}
    <section className="bg-white py-20" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1604093882750-3ed498f3178b'); background-size: cover"}}>
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <Image src={logo} alt="Logo" width={200} height={200} className="mx-auto"/>
              <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">Coming Soon</h1>
              <p className="text-white text-xl md:text-2xl">
                We're working hard to bring you something amazing. Stay tuned!
              </p>    
            </div>
        </div>
    </section>

    {/*!-- Features section -->*/}
    <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-600">What to expect</h2>
                <p className="text-gray-600 mb-12">Here are some of the key features that we're working on.</p>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">01</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Home </h3>
                        <p className="text-gray-600 mb-4">Focus on welcoming visitors and introducing the purpose of the platform. Highlight its user-friendly interface, ease of navigation, and perhaps a brief mention of the key services or content available.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">02</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">About</h3>
                        <p className="text-gray-600 mb-4">Explain the mission, vision, and values of your platform. Share the story behind its creation, the team's dedication, and what sets your platform apart from others.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">03</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Services</h3>
                        <p className="text-gray-600 mb-4">Detail the specific services or solutions your platform offers. Highlight the benefits users can expect, any unique features, and how your services can address their needs or challenges.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">04</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Membership</h3>
                        <p className="text-gray-600 mb-4">Emphasize the perks and privileges of becoming a member. Highlight exclusive content, access to special events or resources, and any discounts or rewards members receive.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">05</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Events</h3>
                        <p className="text-gray-600 mb-4">Showcase upcoming events, workshops, or webinars hosted on your platform. Highlight the value of attending these events, any notable speakers or topics, and how they can benefit users.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">06</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Media Center</h3>
                        <p className="text-gray-600 mb-4"> Present a hub for multimedia content such as videos, podcasts, or downloadable resources. Highlight the diverse range of content available, its relevance to users, and how it can enhance their experience.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">07</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Resources</h3>
                        <p className="text-gray-600 mb-4">Offer valuable resources such as articles, guides, templates, or tools. Highlight the practicality, relevance, and usefulness of these resources in helping users achieve their goals or solve their problems.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-rose-600 mb-4">08</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-600">Contact</h3>
                        <p className="text-gray-600 mb-4">Provide multiple channels for users to get in touch with your team. Assure them of prompt support, responsiveness, and personalized assistance with any inquiries or issues they may have.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}
