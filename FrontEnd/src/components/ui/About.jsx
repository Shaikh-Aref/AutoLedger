import '../../css/About.css'
import Footer from '../library/footer';
import { ADDcarousel } from './Carousel';
import { NavigationBar } from './NavigationBar';

export function About() {
  return (
    <>
      <NavigationBar />
      <ADDcarousel />
      <div className="aboutcontainer">
        <div className="aboutitem">
          <img src="https://seeklogo.com/images/G/globe-logo-7DED53A9AA-seeklogo.com.png" alt="Legacy" className="aboutimage" />
          <h3>Legacy of 15 years</h3>
          <p>From 15 years ASP Automobile-Service-Center has grown to become one of the largest wrokshop in the India</p>
        </div>
        <div className="aboutitem">
          <img src="https://t3.ftcdn.net/jpg/05/38/63/98/360_F_538639833_bzLDFDuegFpgHEiYPwf5QYWQgwsORvmv.jpg" alt="Quality" className="aboutimage" />
          <h3>Quality Management</h3>
          <p>ASP Automobile Service stands for exceptional quality. Our quality management system guarantees excellent standards at every ASP Automobile Service workshop.</p>
        </div>
        <div className="aboutitem">
          <img src="https://www.kindpng.com/picc/m/280-2806436_car-repair-car-repair-icon-png-transparent-png.png" alt="Service" className="aboutimage" />
          <h3>Service promises</h3>
          <p>Customer satisfaction is the measure of our success.
            Our unique service promises mean commitment to finding the best possible solution to any problem.</p>
        </div>

      </div>
      <Footer /></>
  );
}

export default About;