import Table from "./components/Table";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./components/ui/icons/plus-icon";

export default function Home() {
  return (
    <main className="flex mt-12 mx-auto min-h-screen flex-col max-w-screen-xl">
      {/* Table header */}
      <div className="flex justify-between">
        <h1 className="text-2xl text-textColor">Orders</h1>
        <div className="space-x-3">
          <Button label="Export" variant="outlined" startIcon={<PlusIcon />} />
          <Button label="Create Order" startIcon={<PlusIcon />} />
        </div>
      </div>
      <Table/>

    </main>
  );
}
