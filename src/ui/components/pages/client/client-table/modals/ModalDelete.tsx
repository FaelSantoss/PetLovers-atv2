import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component } from "react"

interface Client {
  id: number;
  name: string;
  cpf: string;
  telefone: string;
  dataCadastro: string;
}

interface ModalDeleteProps {
  client: Client
}
export class ModalDelete extends Component<ModalDeleteProps> {
  render() {
    const { client } = this.props

    return (
      <ModalBase
      title="Excluir Cliente"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <p>Tem certeza de que deseja excluir o cliente {client.name}?</p>
      </div>
    </ModalBase>
  );
}
};
