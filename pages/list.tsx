import Link from "next/link";
import Nav from "../components/nav";

const list = () => {
  return (
    <div>
      <Nav />
      <div className="px-20 py-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-3/4 h-64 p-2 bg-white border border-transparent shadow-lg hover:border-yellow-500">
            <img
              src="https://vignette.wikia.nocookie.net/gtawiki/images/1/13/LestersHouse-GTAV.png/revision/latest?cb=20140409020556"
              alt="w-full h-20"
            />
            <div className="flex flex-col my-2">
              <span>Eclipse Towers, Penthouse Suite 1</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">$390.000</span>
                <Link href="#">
                  <a className="px-4 py-1 text-white rounded-full bg-primary">
                    Comprar
                  </a>
                </Link>
              </div>
              <span>North Los Santos</span>
            </div>
          </div>
          <div className="w-3/4 h-64 p-2 bg-white border border-transparent shadow-lg hover:border-yellow-500">
            <img
              src="https://vignette.wikia.nocookie.net/gtawiki/images/1/13/LestersHouse-GTAV.png/revision/latest?cb=20140409020556"
              alt="w-full h-20"
            />
            <div className="flex flex-col my-2">
              <span>Eclipse Towers, Penthouse Suite 1</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">$390.000</span>
                <Link href="#">
                  <a className="px-4 py-1 text-white rounded-full bg-primary">
                    Comprar
                  </a>
                </Link>
              </div>
              <span>North Los Santos</span>
            </div>
          </div>
          <div className="w-3/4 h-64 p-2 bg-white border border-transparent shadow-lg hover:border-yellow-500">
            <img
              src="https://vignette.wikia.nocookie.net/gtawiki/images/1/13/LestersHouse-GTAV.png/revision/latest?cb=20140409020556"
              alt="w-full h-20"
            />
            <div className="flex flex-col my-2">
              <span>Eclipse Towers, Penthouse Suite 1</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">$390.000</span>
                <Link href="#">
                  <a className="px-4 py-1 text-white rounded-full bg-primary">
                    Comprar
                  </a>
                </Link>
              </div>
              <span>North Los Santos</span>
            </div>
          </div>
          <div className="w-3/4 h-64 p-2 bg-white border border-transparent shadow-lg hover:border-yellow-500">
            <img
              src="https://vignette.wikia.nocookie.net/gtawiki/images/1/13/LestersHouse-GTAV.png/revision/latest?cb=20140409020556"
              alt="w-full h-20"
            />
            <div className="flex flex-col my-2">
              <span>Eclipse Towers, Penthouse Suite 1</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">$390.000</span>
                <Link href="#">
                  <a className="px-4 py-1 text-white rounded-full bg-primary">
                    Comprar
                  </a>
                </Link>
              </div>
              <span>North Los Santos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default list;
