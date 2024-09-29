import {Metadata} from "next";
import {fetchCustomers} from "@/app/lib/data";
import {lusitana} from "@/app/ui/fonts";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        All customers
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        {<div className="bg-white px-6">
          {customers.map((customer) => {
            return (
              <div key={customer.id} className="flex flex-row items-center justify-between py-4">
                <p>{customer.name}</p>
                <p>{customer.email}</p>
                  <Image src={customer.image_url} alt={customer.name + "'s profile picture"} className="mr-4 rounded-full" width={32} height={32} />

              </div>
            )
          })
          }

        </div>}
      </div>
    </div>
  );
}