import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, Component } from "react";

interface ModalBaseProps {
  title: string;
  triggerButton: ReactNode;
  children: ReactNode;
}

interface ModalBaseState {
  isOpen: boolean;
}

class ModalBase extends Component<ModalBaseProps, ModalBaseState> {
  constructor(props: ModalBaseProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  setIsOpen = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  handleConfirm = () => {
    this.setIsOpen(false);
  };

  render() {
    const { title, triggerButton, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Dialog open={isOpen} onOpenChange={this.setIsOpen}>
        <DialogTrigger asChild onClick={() => this.setIsOpen(true)}>
          {triggerButton}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
          <button
            onClick={this.handleConfirm}
            className="bg-primary text-zinc-50 hover:bg-[#172341] mt-4 px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </DialogContent>
      </Dialog>
    );
  }
}

export default ModalBase;
