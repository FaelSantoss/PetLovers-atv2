import ModalBase from "./ModalBase"
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component } from "react"

interface Service {
  id: number;
  name: string;
  price: string;
}

interface ModalEditProps {
  service: Service;
}

export class ModalEdit extends Component<ModalEditProps> {
  render() {
  const { service } = this.props

  return (
    <ModalBase
      title="Editar Produto"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Edit className="mr-2 h-4 w-4" /> Editar
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <input type="text" defaultValue={service.name} className="border p-2 rounded" />
        <input type="text" defaultValue={service.price} className="border p-2 rounded" />
      </div>
    </ModalBase>
  );
}
};
