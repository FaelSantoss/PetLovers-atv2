import ModalBase from "./ModalBase";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component } from "react";

export class ModalAdd extends Component {
  render () {
    return (
      <ModalBase
      title="Adicionar Novo Cliente"
      triggerButton={
        <Button className="bg-primary text-zinc-50 hover:bg-[#172341] p-2 md:p-3 flex items-center text-sm md:text-base">
        <Plus className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
        <span className="hidden sm:inline">Adicionar Cliente</span>
      </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Nome do Cliente" className="border p-2 rounded" />
        <input type="text" placeholder="CPF" className="border p-2 rounded" />
        <input type="text" placeholder="Telefone" className="border p-2 rounded" />
        <input type="text" placeholder="Data Cadastro" className="border p-2 rounded" />
      </div>
    </ModalBase>
  );
}
};
