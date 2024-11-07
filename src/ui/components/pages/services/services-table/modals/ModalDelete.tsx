import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component } from "react"

interface Service {
  id: number;
  name: string;
  price: string;
}

interface ModalDeleteProps {
  service: Service
}
export class ModalDelete extends Component<ModalDeleteProps> {
  render() {
    const { service } = this.props

    return (
      <ModalBase
      title="Excluir Serviço"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <p>Tem certeza de que deseja excluir o serviço {service.name}?</p>
      </div>
    </ModalBase>
  );
}
};
