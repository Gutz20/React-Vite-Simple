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
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import styles from "@/styles/loginpage.module.css";

const formLoginSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
    console.log({ values });
    toast("Iniciando Sesion!", { position: toast.POSITION.BOTTOM_RIGHT });
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
              {/* <CardDescription>
                Explore More by connectig with us
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                {/* <div className="profile flex justify-center py-4">
                  <img
                    src="assets/profile.png"
                    className={styles.profile_img}
                    alt="avatar"
                  />
                </div> */}
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="Email" />
                        </FormControl>
                        <FormDescription>Ingresa tu email</FormDescription>
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
