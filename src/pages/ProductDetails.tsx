import productImage from "@/assets/images/honey-1.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";

const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:py-10">
      <div className="flex gap-5 md:flex-row flex-col">
        <section className="w-full md:w-1/2">
          <figure>
            <img
              src={productImage}
              alt="Product Image"
              className="w-full object-cover rounded-lg "
            />
          </figure>
        </section>
        <section className="w-full sm:w-1/2 space-y-3">
          <div>
            <Badge
              variant="outline"
              className="text-xs rounded-full mx-auto w-max"
            >
              Badge
            </Badge>
          </div>

          <h3 className="mt-2 text-xl font-semibold text-gray-900 ">
            সুন্দরবনের মধু / Sundarban Honey 1kg
          </h3>

          <p className="mt-1.5 text-lg font-semibold text-gray-700 ">
            Tk. 14.99
          </p>

          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Button size={"icon"} variant={"outline"}>
                <FiMinus />
              </Button>
              <p>2</p>
              <Button size={"sm"} variant={"outline"}>
                <FiPlus />
              </Button>
            </div>

            <Button className="text-center rounded-sm bg-primary p-2 text-xs sm:text-sm font-medium transition hover:scale-103">
              <FiShoppingCart /> Add to Cart
            </Button>
          </div>

          <div>
            <h1 className="font-medium text-lg border-b pb-2 mt-2">
              Description
            </h1>
            <p className="my-4 text-justify leading-relaxed">
              পীতাভ বাদামী রঙের মতো দেখতে মধুই সুন্দরবনের খাঁটি ও বিশুদ্ধ মধু।
              খেতে খুবই সুস্বাদু এ মধু, শুধু পৃথিবীর সবচেয়ে বড় ম্যানগ্রোভ বন
              সুন্দরবন থেকেই আহরণ করা হয়। আমরা অর্গানিক বা শতভাগ প্রাকৃতিক মধু
              বলতে সুন্দরবনের বিভিন্ন ফুল থেকে সংগ্রহীত প্রাকৃতিক চাকের মধু’কে
              বুঝি। আমাদের দেশের প্রাকৃতিক মধুর সবচেয়ে বড় উৎস হচ্ছে সুন্দরবন।
              সুন্দরবনের মধু আবহাওয়াগত কারণে সবসময় পাতলা হয় । মৌসুষের শুরুতে
              সাদাটে দেখায় তবে সুন্দনবনের ফুল ও সময় পরিবর্তনের সাথে লালচে রঙ
              ধারণ করে। খেতে খুবই সুস্বাদু, হালকা টকটক মিষ্টি ও কিছুটা ঝাঝালো
              লাগে। মধুতে বুনো ঘ্রাণ থাকে। মধুর বোতলে ঝাঁকি লাগলে অনকে সময় ফেনা
              সৃষ্টি হয়। মধুর উপরে পোলেনের স্তর দেখা যায়। সুন্দরবনের মধুতে
              খলিশা, গরান, কেওড়া হরগোজা, পশুর, মঠগরান, কাকড়া, লতা ফুলের নেকটার
              থাকে। সুন্দরবনের মধু সিজনের শেষে আবহাওয়া গত কারনে কিছুটা পরিবর্তন
              হতে পারে। সুন্দরবন মধু এক অনবদ্য সৃষ্টি, বৈচিত্র্যময় এই বাংলাদেশে
              উৎপাদিত খাঁটি সুন্দরবনের মধু গুণাবলীতে অনন্য। পুষ্টিবিদদের মতে,
              দেহের সমস্যা ও রোগব্যাধি থেকে বেঁচে থাকতে এই মধু সহায়ক ভৃমিকা পালন
              করে। যেমন: রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে সহায়তা করে । রক্ত চলাচল
              বৃদ্ধিতে সহায়তা করে । ত্বকের দাগ দূর করতে সহায়তা করে । হজম
              বৃদ্ধিতে সহায়তা করে। গ্যাস্ট্রিক নিয়ন্ত্রণ রাখতে ভূমিকা পালন করে
              । দেহ প্রাণবন্ত রাখতে সহায়তা করে । খাঁটি মধু বা ভেজাল/কৃত্তিম মধু
              চেনার ঘরোয়া কোনো পরীক্ষা নেই। ঘরোয়া পরীক্ষা বলতে আগুন, পানি, চুন,
              পিঁপড়া, ফ্রিজিং ইত্যাদি পরীক্ষা। আসলে এ পরীক্ষাগুলো দিয়ে খাঁটি বা
              ভেজাল/কৃত্তিম মধু চেনা সম্ভব নয়। তাই, বিশ্বস্ততায় ভরপুর ও আস্থা
              পেতে, ঘরের বাজার-এর সুন্দরবনের মধু নিয়মিত খেতে পারেন।
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
