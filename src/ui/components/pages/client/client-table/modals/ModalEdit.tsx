import ModalBase from "./ModalBase"
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component } from "react"

interface Client {
  id: number;
  name: string;
  cpf: string;
  telefone: string;
  dataCadastro: string;
}

interface ModalEditProps {
  client: Client;
}

export class ModalEdit extends Component<ModalEditProps> {
  render() {
  const { client } = this.props

  return (
    <ModalBase
      title="Editar Cliente"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Edit className="mr-2 h-4 w-4" /> Editar
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <input type="text" defaultValue={client.name} className="border p-2 rounded" />
        <input type="text" defaultValue={client.cpf} className="border p-2 rounded" />
        <input type="text" defaultValue={client.telefone} className="border p-2 rounded" />
        <input type="text" defaultValue={client.dataCadastro} className="border p-2 rounded" />
      </div>
    </ModalBase>
  );
}
};
