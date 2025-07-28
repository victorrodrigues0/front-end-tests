import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactNode } from "react"

type ModalProps = {
    btnText: string,
    titleText: string,
    description?: string,
    classDeleteBtn?: string
    classSaveBtn?: string,
    btnFunction: () => void,
    children: ReactNode
}

export function Modal({
    btnText, titleText, description, classDeleteBtn, classSaveBtn, btnFunction, children
}: ModalProps) {
    return (
            <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">{btnText}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{titleText}</DialogTitle>
                        {description &&
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        }
                    </DialogHeader>
                    <div className="grid gap-4">
                        {children}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className={`${classDeleteBtn} cursor-pointer`}>Cancelar</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit"
                                onClick={() => btnFunction()}
                                className={`${classSaveBtn} cursor-pointer`}>Salvar</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
