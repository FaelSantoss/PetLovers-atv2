'use client'
import { useState } from 'react'
import ClientTable from './client-table';

const mockClients = [
  { id: 1, name: 'João Silva', cpf: '123.456.789-00', telefone: '(11) 98765-4321', dataCadastro: '2023-01-15' },
  { id: 2, name: 'Maria Oliveira', cpf: '987.654.321-00', telefone: '(21) 99876-5432', dataCadastro: '2023-02-20' },
  { id: 3, name: 'Carlos Souza', cpf: '456.123.789-00', telefone: '(31) 91234-5678', dataCadastro: '2023-03-10' },
  { id: 4, name: 'Ana Costa', cpf: '789.321.654-00', telefone: '(41) 92345-6789', dataCadastro: '2023-04-25' },
  { id: 5, name: 'Pedro Almeida', cpf: '321.987.654-00', telefone: '(51) 93456-7890', dataCadastro: '2023-05-30' },
  { id: 6, name: 'Fernanda Lima', cpf: '654.789.321-00', telefone: '(61) 94567-8901', dataCadastro: '2023-06-15' },
  { id: 7, name: 'Lucas Pereira', cpf: '321.654.987-00', telefone: '(71) 95678-9012', dataCadastro: '2023-07-05' },
  { id: 8, name: 'Patrícia Mendes', cpf: '987.321.456-00', telefone: '(81) 96789-0123', dataCadastro: '2023-08-20' },
];


export const ClientPage = () => {
  const [clients] = useState(mockClients)

  return (
    <>
      <div>
        <ClientTable 
          clients={clients} 
        />
      </div>
    </>
  )
}
