import { ArrowDown, Container, ImagesContainer,HomeImageOldPhones, HomeImageSmartphone, HomeListText, TextContainer, HomeText, HomeH2 } from "./Home.styled"
import oldPhoneImage from './/..//..//images/bgMainPage.png'
import smartPhoneImage from './/..//..//images/smattphone.webp'

const Home = () => {
    return (
        <Container>
            <TextContainer>

            
            <HomeH2>Welcome to the era of digital phone books!</HomeH2>

                    <HomeText>
                        We live in an exciting time where technology is constantly changing our lives, including how we store and find information. Not long ago, paper phone books were an essential part of our everyday lives. They were huge and bulky, and we had to flip through many pages to find a desired number. But the world has moved on, and today we have endless possibilities thanks to phone books residing right in our smartphones.
</HomeText>
<HomeText>The transition from landline phones to smartphones has not only allowed us to make calls but also granted us constant access to our contacts anytime, anywhere. Our phone book has become mobile and convenient, and electronic applications have empowered us to efficiently manage our contacts.
                </HomeText>
                <ImagesContainer>

                        <HomeImageOldPhones src={oldPhoneImage} alt="old phohe" width='700px' height='240px' />
                        <ArrowDown/> 
                        <HomeImageSmartphone src={smartPhoneImage} alt="smartPhone" width='700px' height='460px' />
                </ImagesContainer>
                
<HomeText>The history of the first phone book dates back to the late 19th century. In 1878, just a few years after the invention of the telephone, the first phone book was published. It included only 50 subscribers and served as an experiment, aiming to assist people in finding the necessary phone numbers.
</HomeText>
<HomeText>Today, we present to you our modern application that will help you effectively manage your phone book. It allows you to save your contacts on our secure server, ensuring their safety and accessibility at any time. Our application enables you to add, edit, and delete contacts, as well as quickly search for the desired information. You will no longer lose your contacts and can easily communicate with your friends, colleagues, and loved ones.
</HomeText>

    <HomeListText>The advantages of our application include:

                    <li>
                        <HomeText>Convenience and accessibility: You can access your phone book anytime, anywhere using your smartphone. No more carrying heavy paper books or searching for a specific number in impeccable handwriting.
                        </HomeText>
                    </li>
 <li>
                        <HomeText>
                        Security and preservation: Your contacts are saved on our server, guaranteeing their safety from loss or damage. You won't risk losing all your contacts due to phone breakage or loss.
                        </HomeText>
                    </li>
                    <li>
                        <HomeText>
                        Contact management: Our application allows you to effortlessly add, edit, and delete contacts. You can organize your phone book into groups, add contact photos, and additional details for ease of use.
                        </HomeText>
                    </li>
                    <li>
                        <HomeText>
                       Quick search: No more wasting time flipping through pages or scrolling long contact lists. Our application provides fast search capabilities so you can find the desired contact within seconds.
                     </HomeText>
                    </li>
</HomeListText>
<HomeText>Welcome to the future of electronic phone books! Our application will help you manage your contacts with ease and convenience while keeping them safe on a secure server. Never lose your contacts and always stay connected with those who matter to you.
        </HomeText>
            </TextContainer>
        </Container>
    )
}


export default Home