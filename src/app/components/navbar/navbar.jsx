import { Flex, Link, Select, Text } from "@chakra-ui/react";


export default function Navbar() {
   
    return (
        <Flex w="100%" h="80px" bgColor="#0A369D" justifyContent={"center"} alignItems={'center'}>
            <Text
                textAlign={"center"}
                color="white"
                fontSize={"24px"}
                w="90%"
                m="0 auto"
            >
                <Link href={"/"}>Home</Link>
            </Text>

            <Text
                textAlign={"center"}
                color="white"
                fontSize={"24px"}
                w="90%"
                m="0 auto"
            >
                <Link href={"/evaluacionsolicitud"}>Cuotas</Link>
            </Text>
            <Text
                textAlign={"center"}
                color="white"
                fontSize={"24px"}
                w="90%"
                m="0 auto"
            >
                <Link href={"/actualizacionventas"}>Actualización de ventas a crédito</Link>
            </Text>

            <Text
                textAlign={"center"}
                color="white"
                fontSize={"24px"}
                w="90%"
                m="0 auto"
            >
                <Link href={"/registrodevolucion"}>Devoluciones</Link>
            </Text>
        </Flex>
    )
}