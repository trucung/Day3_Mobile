import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BookGrid } from '../components/BookGrid';
import { CategoryChips } from '../components/CategoryChips';
import { FloatingCartButton } from '../components/FloatingCartButton';
import { Header } from '../components/Header';
import { BOOKS } from '../data';

export default function Home() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <View style={styles.screen}>

      {/* 1. Header cố định trên cùng */}
      <Header />

      {/* 2. ScrollView chứa Chips + Grid */}
      <ScrollView contentContainerStyle={styles.content}>
        <CategoryChips />
        <View style={{ height: 16 }} />
        <BookGrid books={BOOKS} onPressBook={(id) => console.log(id)} />
      </ScrollView>

      {/* 3. Nút giỏ hàng nổi NGOÀI ScrollView */}
      <FloatingCartButton count={cartCount} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },

  content: {
    padding: 16,
    paddingBottom: 100
  },
});