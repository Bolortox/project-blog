import ContactUs from "@/pages/contactus";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function ContactUsPage() {
  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1216px] w-auto h-auto m-auto ">
        <Header />

        <div className="pt-[100px]">
          <div>
            <div className="flex flex-col">
              <p>Contact Us</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div>
              <div>
                <p>Adress</p>
                <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
              </div>
              <div>
                <p>Contact</p>
                <p>313-332-8662 info@email.com</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
