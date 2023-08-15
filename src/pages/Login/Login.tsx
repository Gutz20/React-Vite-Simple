import { authenticateRequest } from "@/api/auth";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import styles from "@/styles/loginpage.module.css";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

const formLoginSchema = z.object({
  username: z.string(),
});

const Login = () => {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    const { status, error } = await authenticateRequest(values.username);
    if (status !== 200) return toast.error(error);

    toast("Iniciando Sesion!", { position: toast.POSITION.BOTTOM_RIGHT });
    navigate("/password");
  };

  const onError = () => {
    toast("Error al ingresar los datos", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center h-screen ${styles.background_personality}`}
    >
      <Link to={"/"}>
        <img
          src="assets/logo.png"
          alt="logo"
          className="object-cover w-[120px] h-[50px]"
        />
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Iniciar Sesion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Username"
                          />
                        </FormControl>
                        <FormDescription>Ingresa tu username</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Iniciar Sesion
              </Button>
              {/* <span className="text-xs">
                Al continuar, aceptas las Condiciones de uso y el Aviso de
                privacidad de Enatel Perú
              </span> */}
              <div className="text-center">
                <span className="text-gray-500">
                  ¿No estas registrado?{" "}
                  <Link to="/signup" className="text-red-500">
                    Registrarse
                  </Link>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <ToastContainer />
      <DevTool control={form.control} />
    </div>
  );
};

export default Login;
