import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  TextInput, Modal, KeyboardAvoidingView, Platform, Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GUIDE_TOPICS, GUIDE_CONTENT } from '../data/guideData';

export default function GuideDetailScreen({ route, navigation }) {
  const { topicKey } = route.params;
  const topic = GUIDE_TOPICS.find(t => t.key === topicKey);
  const content = GUIDE_CONTENT[topicKey];

  return (
    <View style={styles.container}>
      {/* Custom header */}
      <View style={[styles.topBar, { borderBottomColor: topic.color + '33' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={topic.color} />
        </TouchableOpacity>
        <View style={[styles.headerIcon, { backgroundColor: topic.color + '18' }]}>
          <Ionicons name={topic.icon} size={18} color={topic.color} />
        </View>
        <Text style={[styles.topBarTitle, { color: topic.color }]} numberOfLines={1}>{topic.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Intro */}
        {content.intro && (
          <View style={styles.introCard}>
            <Text style={styles.introText}>{content.intro}</Text>
          </View>
        )}

        {/* Sections */}
        {content.sections.map((section, i) => (
          <SectionRenderer key={i} section={section} topicColor={topic.color} />
        ))}

        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

function SectionRenderer({ section, topicColor }) {
  switch (section.type) {
    case 'checklist': return <ChecklistSection section={section} topicColor={topicColor} />;
    case 'timeline': return <TimelineSection section={section} topicColor={topicColor} />;
    case 'list': return <ListSection section={section} topicColor={topicColor} />;
    case 'dos': return <DosSection section={section} />;
    case 'donts': return <DontsSection section={section} />;
    case 'quotes': return <QuotesSection section={section} topicColor={topicColor} />;
    case 'important': return <ImportantSection section={section} />;
    case 'emergency': return <EmergencySection section={section} />;
    case 'faq': return <FAQSection section={section} topicColor={topicColor} />;
    case 'explainer': return <ExplainerSection section={section} topicColor={topicColor} />;
    case 'nutrients': return <NutrientsSection section={section} topicColor={topicColor} />;
    case 'avoid': return <AvoidSection section={section} />;
    case 'cravings_list': return <CravingsListSection section={section} topicColor={topicColor} />;
    case 'resources': return <ResourcesSection section={section} topicColor={topicColor} />;
    default: return null;
  }
}

// ── Checklist ──────────────────────────────────
function ChecklistSection({ section, topicColor }) {
  const color = section.color || topicColor;
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} icon={section.icon} color={color} />
      {section.items.map((item, i) => (
        <View key={i} style={styles.checkRow}>
          <View style={[styles.checkIcon, { backgroundColor: color + '18' }]}>
            <Ionicons name={item.icon || 'checkmark'} size={14} color={color} />
          </View>
          <Text style={styles.checkText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

// ── Timeline ───────────────────────────────────
function TimelineSection({ section, topicColor }) {
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((item, i) => (
        <View key={i} style={styles.timelineRow}>
          <View style={styles.timelineLeft}>
            <View style={[styles.timelineDot, { backgroundColor: topicColor }]} />
            {i < section.items.length - 1 && <View style={[styles.timelineLine, { backgroundColor: topicColor + '33' }]} />}
          </View>
          <View style={styles.timelineRight}>
            <Text style={[styles.timelineWeek, { color: topicColor }]}>{item.week}</Text>
            <Text style={styles.timelineLabel}>{item.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

// ── List ───────────────────────────────────────
function ListSection({ section, topicColor }) {
  const color = section.color || topicColor;
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} icon={section.icon} color={color} />
      {section.items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <View style={[styles.bullet, { backgroundColor: color }]} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

// ── DOs ────────────────────────────────────────
function DosSection({ section }) {
  return (
    <EditableListSection
      section={section}
      color="#E91E63"
      iconName="checkmark-circle"
      itemStyle={styles.doText}
      borderColor="#E91E6333"
      storageKey={section.storageKey || 'herhero_custom_dos'}
      addLabel="Add a suggestion"
      emptyPlaceholder="e.g. Bring a spare phone charger for her"
    />
  );
}

// ── DON'Ts ─────────────────────────────────────
function DontsSection({ section }) {
  return (
    <EditableListSection
      section={section}
      color="#C2185B"
      iconName="alert-circle"
      itemStyle={styles.dontText}
      borderColor="#C2185B33"
      storageKey={section.storageKey || 'herhero_custom_donts'}
      addLabel="Add a suggestion"
      emptyPlaceholder="e.g. Avoid checking scores during contractions"
    />
  );
}

// ── Editable List (shared by DOs and DON'Ts) ───
function EditableListSection({ section, color, iconName, itemStyle, borderColor, storageKey, addLabel, emptyPlaceholder }) {
  const [customItems, setCustomItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AsyncStorage.getItem(storageKey).then(val => {
      if (val) setCustomItems(JSON.parse(val));
    });
  }, [storageKey]);

  async function saveCustom(items) {
    setCustomItems(items);
    await AsyncStorage.setItem(storageKey, JSON.stringify(items));
  }

  function openModal() {
    setInputText('');
    setModalVisible(true);
    Animated.spring(slideAnim, { toValue: 1, useNativeDriver: true, tension: 80, friction: 10 }).start();
  }

  function closeModal() {
    Animated.timing(slideAnim, { toValue: 0, useNativeDriver: true, duration: 200 }).start(() => setModalVisible(false));
  }

  async function addItem() {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const updated = [...customItems, { text: trimmed, custom: true }];
    await saveCustom(updated);
    closeModal();
  }

  async function deleteItem(index) {
    const updated = customItems.filter((_, i) => i !== index);
    await saveCustom(updated);
    if (updated.length === 0) setDeleteMode(false);
  }

  const allItems = [...section.items, ...customItems];

  return (
    <View style={[styles.section, { borderColor }]}>
      {/* Header row with title + action buttons */}
      <View style={styles.editableHeader}>
        <SectionHeading heading={section.heading} color={color} />
        <View style={styles.headerBtns}>
          {customItems.length > 0 && (
            <TouchableOpacity
              style={[styles.headerIconBtn, { backgroundColor: color + '15' }]}
              onPress={() => setDeleteMode(!deleteMode)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name={deleteMode ? 'checkmark' : 'trash-outline'} size={15} color={color} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.addBtn, { backgroundColor: color }]}
            onPress={openModal}
            activeOpacity={0.85}
          >
            <Ionicons name="add" size={16} color="#fff" />
            <Text style={styles.addBtnText}>{addLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Built-in items */}
      {section.items.map((item, i) => (
        <View key={`builtin-${i}`} style={styles.doRow}>
          <Ionicons name={iconName} size={18} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
          <Text style={itemStyle}>{item.text}</Text>
        </View>
      ))}

      {/* Custom items */}
      {customItems.length > 0 && (
        <View style={[styles.customDivider, { borderTopColor: color + '22' }]}>
          <Text style={[styles.customDividerLabel, { color: color + 'AA' }]}>YOUR ADDITIONS</Text>
        </View>
      )}
      {customItems.map((item, i) => (
        <View key={`custom-${i}`} style={styles.customItemRow}>
          <View style={[styles.customBadge, { backgroundColor: color + '15', borderColor: color + '33' }]}>
            <Ionicons name={iconName} size={16} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
            <Text style={[itemStyle, { flex: 1 }]}>{item.text}</Text>
          </View>
          {deleteMode && (
            <TouchableOpacity
              style={[styles.deleteBtn, { backgroundColor: '#FFEBEE', borderColor: '#FFCDD2' }]}
              onPress={() => deleteItem(i)}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <Ionicons name="close" size={13} color="#B71C1C" />
            </TouchableOpacity>
          )}
        </View>
      ))}

      {/* Add Modal */}
      <Modal visible={modalVisible} transparent animationType="none" onRequestClose={closeModal}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.modalOverlay}>
          <TouchableOpacity style={StyleSheet.absoluteFill} onPress={closeModal} activeOpacity={1} />
          <Animated.View
            style={[
              styles.modalSheet,
              {
                transform: [{
                  translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }),
                }],
              },
            ]}
          >
            <View style={styles.modalHandle} />
            <View style={[styles.modalIconRow, { backgroundColor: color + '18' }]}>
              <Ionicons name={iconName} size={22} color={color} />
            </View>
            <Text style={[styles.modalTitle, { color }]}>{addLabel}</Text>
            <Text style={styles.modalSub}>This will be saved to your personal list.</Text>
            <TextInput
              style={[styles.modalInput, { borderColor: color + '44', focusBorderColor: color }]}
              placeholder={emptyPlaceholder}
              placeholderTextColor="#C9A8B8"
              value={inputText}
              onChangeText={setInputText}
              multiline
              autoFocus
              maxLength={200}
              returnKeyType="done"
              onSubmitEditing={addItem}
            />
            <Text style={styles.charCount}>{inputText.length}/200</Text>
            <View style={styles.modalBtns}>
              <TouchableOpacity style={styles.modalCancelBtn} onPress={closeModal}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalSaveBtn, { backgroundColor: inputText.trim() ? color : '#FADADD' }]}
                onPress={addItem}
                disabled={!inputText.trim()}
              >
                <Ionicons name="checkmark" size={16} color="#fff" />
                <Text style={styles.modalSaveText}>Add to List</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

// ── Quotes ─────────────────────────────────────
function QuotesSection({ section, topicColor }) {
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((q, i) => (
        <View key={i} style={[styles.quoteCard, { borderLeftColor: topicColor }]}>
          <Text style={[styles.quoteText, { color: topicColor }]}>{q}</Text>
        </View>
      ))}
    </View>
  );
}

// ── Important ──────────────────────────────────
function ImportantSection({ section }) {
  const color = section.color || '#C2185B';
  return (
    <View style={[styles.section, { borderColor: color + '44' }]}>
      <SectionHeading heading={section.heading} icon={section.icon} color={color} />
      {section.intro && <Text style={styles.importantIntro}>{section.intro}</Text>}
      {section.items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <View style={[styles.bullet, { backgroundColor: color }]} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

// ── Emergency ──────────────────────────────────
function EmergencySection({ section }) {
  return (
    <View style={[styles.section, styles.emergencySection]}>
      <View style={styles.emergencyHeader}>
        <Ionicons name="alert-circle" size={22} color="#B71C1C" />
        <Text style={styles.emergencyTitle}>{section.heading}</Text>
      </View>
      {section.intro && (
        <Text style={styles.emergencyIntro}>{section.intro}</Text>
      )}
      {section.steps.map((step, i) => (
        <View key={i} style={styles.stepRow}>
          <View style={styles.stepNum}>
            <Text style={styles.stepNumText}>{step.num}</Text>
          </View>
          <Text style={styles.stepText}>{step.text}</Text>
        </View>
      ))}
    </View>
  );
}

// ── FAQ ────────────────────────────────────────
function FAQSection({ section, topicColor }) {
  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((item, i) => (
        <View key={i} style={styles.faqItem}>
          <TouchableOpacity
            style={styles.faqQ}
            onPress={() => toggle(i)}
            activeOpacity={0.8}
          >
            <Text style={styles.faqQText}>{item.q}</Text>
            <Ionicons
              name={open[i] ? 'chevron-up' : 'chevron-down'}
              size={16}
              color={topicColor}
            />
          </TouchableOpacity>
          {open[i] && (
            <View style={[styles.faqA, { borderTopColor: topicColor + '22' }]}>
              <Text style={styles.faqAText}>{item.a}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

// ── Explainer ──────────────────────────────────
function ExplainerSection({ section, topicColor }) {
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      <Text style={styles.explainerText}>{section.content}</Text>
    </View>
  );
}

// ── Nutrients ──────────────────────────────────
function NutrientsSection({ section, topicColor }) {
  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((item, i) => (
        <View key={i} style={styles.nutrientItem}>
          <TouchableOpacity
            style={styles.nutrientHeader}
            onPress={() => toggle(i)}
            activeOpacity={0.8}
          >
            <View style={[styles.nutrientDot, { backgroundColor: topicColor }]} />
            <Text style={styles.nutrientName}>{item.nutrient}</Text>
            <Ionicons name={open[i] ? 'chevron-up' : 'chevron-down'} size={15} color="#C9A8B8" />
          </TouchableOpacity>
          {open[i] && (
            <View style={styles.nutrientBody}>
              <Text style={styles.nutrientLabel}>Why it matters</Text>
              <Text style={styles.nutrientText}>{item.why}</Text>
              <Text style={styles.nutrientLabel}>Best food sources</Text>
              <Text style={styles.nutrientText}>{item.foods}</Text>
              {item.supplement && (
                <>
                  <Text style={styles.nutrientLabel}>Supplement notes</Text>
                  <Text style={styles.nutrientText}>{item.supplement}</Text>
                </>
              )}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

// ── Avoid ──────────────────────────────────────
function AvoidSection({ section }) {
  return (
    <View style={[styles.section, { borderColor: '#B71C1C33' }]}>
      <SectionHeading heading={section.heading} color="#B71C1C" />
      {section.items.map((item, i) => (
        <View key={i} style={styles.avoidCard}>
          <View style={styles.avoidLeft}>
            <Ionicons name="close-circle" size={16} color="#B71C1C" />
            <Text style={styles.avoidFood}>{item.food}</Text>
          </View>
          <Text style={styles.avoidReason}>{item.reason}</Text>
        </View>
      ))}
    </View>
  );
}

// ── Cravings List ──────────────────────────────
function CravingsListSection({ section, topicColor }) {
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((item, i) => {
        const safeColor = item.safe === false ? '#B71C1C' : item.safe === 'Tell doctor' ? '#E67E22' : item.safe === 'In moderation' ? '#C2185B' : '#27AE60';
        const safeLabel = item.safe === false ? 'UNSAFE' : item.safe === 'Tell doctor' ? 'TELL DOCTOR' : item.safe === 'In moderation' ? 'IN MODERATION' : 'SAFE';
        return (
          <View key={i} style={styles.cravingCard}>
            <View style={styles.cravingTop}>
              <Text style={styles.cravingFood}>{item.craving}</Text>
              <View style={[styles.safeBadge, { backgroundColor: safeColor + '18', borderColor: safeColor + '44' }]}>
                <Text style={[styles.safeBadgeText, { color: safeColor }]}>{safeLabel}</Text>
              </View>
            </View>
            <Text style={styles.cravingMeaning}>{item.meaning}</Text>
          </View>
        );
      })}
    </View>
  );
}

// ── Resources ──────────────────────────────────
function ResourcesSection({ section, topicColor }) {
  return (
    <View style={styles.section}>
      <SectionHeading heading={section.heading} color={topicColor} />
      {section.items.map((item, i) => (
        <View key={i} style={[styles.resourceCard, { borderLeftColor: topicColor }]}>
          <Text style={styles.resourceName}>{item.name}</Text>
          {item.phone && <Text style={styles.resourceContact}>📞 {item.phone}</Text>}
          {item.contact && <Text style={styles.resourceContact}>🌐 {item.contact}</Text>}
          {item.note && <Text style={styles.resourceNote}>{item.note}</Text>}
        </View>
      ))}
    </View>
  );
}

// ── Shared Section Heading ─────────────────────
function SectionHeading({ heading, icon, color }) {
  return (
    <View style={styles.sectionHeading}>
      {icon && <Ionicons name={icon} size={17} color={color} />}
      <Text style={[styles.sectionHeadingText, { color: color || '#1A1A2E' }]}>{heading}</Text>
    </View>
  );
}

// ── STYLES ─────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 56,
    paddingBottom: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.5,
    gap: 10,
  },
  backBtn: { padding: 4 },
  headerIcon: { width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  topBarTitle: { flex: 1, fontSize: 16, fontWeight: '800', letterSpacing: -0.3 },
  scroll: { paddingTop: 16, paddingHorizontal: 16 },
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#FADADD',
  },
  introText: { fontSize: 14, color: '#7B6472', lineHeight: 22 },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#FADADD',
  },
  sectionHeading: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 },
  sectionHeadingText: { fontSize: 15, fontWeight: '800', flex: 1, lineHeight: 20 },

  // Checklist
  checkRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  checkIcon: { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  checkText: { flex: 1, fontSize: 13.5, color: '#3D2B35', lineHeight: 20 },

  // Timeline
  timelineRow: { flexDirection: 'row', marginBottom: 0 },
  timelineLeft: { width: 24, alignItems: 'center' },
  timelineDot: { width: 10, height: 10, borderRadius: 5, marginTop: 4 },
  timelineLine: { width: 2, flex: 1, marginTop: 4 },
  timelineRight: { flex: 1, paddingLeft: 12, paddingBottom: 16 },
  timelineWeek: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 },
  timelineLabel: { fontSize: 13.5, color: '#7B6472', lineHeight: 20 },

  // Bullets
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 9 },
  bullet: { width: 6, height: 6, borderRadius: 3, marginTop: 8, flexShrink: 0 },
  bulletText: { flex: 1, fontSize: 13.5, color: '#3D2B35', lineHeight: 20 },

  // DOs / DON'Ts
  doRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  doText: { flex: 1, fontSize: 13.5, color: '#3D2B35', lineHeight: 20 },
  dontRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  dontText: { flex: 1, fontSize: 13.5, color: '#3D2B35', lineHeight: 20 },

  // Editable list
  editableHeader: { marginBottom: 14 },
  headerBtns: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 },
  headerIconBtn: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
  addBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  customDivider: { borderTopWidth: 1, marginTop: 6, marginBottom: 10, paddingTop: 10 },
  customDividerLabel: { fontSize: 9, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  customItemRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 8 },
  customBadge: { flex: 1, flexDirection: 'row', alignItems: 'flex-start', gap: 8, borderRadius: 10, borderWidth: 1, padding: 10 },
  deleteBtn: { width: 26, height: 26, borderRadius: 13, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', marginTop: 10, flexShrink: 0 },

  // Modal
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(26,26,46,0.4)' },
  modalSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 28,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },
  modalHandle: { width: 36, height: 4, borderRadius: 2, backgroundColor: '#FADADD', alignSelf: 'center', marginBottom: 20 },
  modalIconRow: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 12 },
  modalTitle: { fontSize: 18, fontWeight: '800', textAlign: 'center', marginBottom: 4 },
  modalSub: { fontSize: 13, color: '#B8A0AA', textAlign: 'center', marginBottom: 18 },
  modalInput: {
    backgroundColor: '#FFF5F8',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    fontSize: 14,
    color: '#1A1A2E',
    minHeight: 80,
    textAlignVertical: 'top',
    lineHeight: 21,
  },
  charCount: { fontSize: 11, color: '#C9A8B8', textAlign: 'right', marginTop: 6, marginBottom: 16 },
  modalBtns: { flexDirection: 'row', gap: 10 },
  modalCancelBtn: { flex: 1, paddingVertical: 14, borderRadius: 14, backgroundColor: '#FCE4EC', alignItems: 'center' },
  modalCancelText: { color: '#C9A8B8', fontWeight: '700', fontSize: 15 },
  modalSaveBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingVertical: 14, borderRadius: 14 },
  modalSaveText: { color: '#fff', fontWeight: '800', fontSize: 15 },

  // Quotes
  quoteCard: { borderLeftWidth: 3, paddingLeft: 12, paddingVertical: 6, marginBottom: 10 },
  quoteText: { fontSize: 14, fontStyle: 'italic', fontWeight: '600', lineHeight: 21 },

  // Important
  importantIntro: { fontSize: 13.5, color: '#7B6472', lineHeight: 20, marginBottom: 12, fontStyle: 'italic' },

  // Emergency
  emergencySection: { backgroundColor: '#FFF8F8', borderColor: '#FFCDD2', borderWidth: 1.5 },
  emergencyHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  emergencyTitle: { fontSize: 15, fontWeight: '800', color: '#B71C1C', flex: 1 },
  emergencyIntro: { fontSize: 13.5, color: '#C62828', lineHeight: 20, marginBottom: 14, fontStyle: 'italic' },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 12 },
  stepNum: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#B71C1C', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  stepNumText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  stepText: { flex: 1, fontSize: 13.5, color: '#3D2B35', lineHeight: 20 },

  // FAQ
  faqItem: { marginBottom: 8, borderRadius: 12, borderWidth: 1.5, borderColor: '#FADADD', overflow: 'hidden' },
  faqQ: { flexDirection: 'row', alignItems: 'center', padding: 13, gap: 10, backgroundColor: '#FFF5F8' },
  faqQText: { flex: 1, fontSize: 13.5, fontWeight: '700', color: '#1A1A2E', lineHeight: 19 },
  faqA: { padding: 13, borderTopWidth: 1, backgroundColor: '#FFFFFF' },
  faqAText: { fontSize: 13.5, color: '#3D2B35', lineHeight: 21 },

  // Explainer
  explainerText: { fontSize: 13.5, color: '#3D2B35', lineHeight: 22 },

  // Nutrients
  nutrientItem: { borderRadius: 10, borderWidth: 1.5, borderColor: '#FADADD', marginBottom: 8, overflow: 'hidden' },
  nutrientHeader: { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 10, backgroundColor: '#FFF5F8' },
  nutrientDot: { width: 8, height: 8, borderRadius: 4 },
  nutrientName: { flex: 1, fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  nutrientBody: { padding: 12, backgroundColor: '#FFFFFF', gap: 4 },
  nutrientLabel: { fontSize: 11, fontWeight: '800', color: '#C9A8B8', textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 8, marginBottom: 2 },
  nutrientText: { fontSize: 13, color: '#3D2B35', lineHeight: 20 },

  // Avoid
  avoidCard: { marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#FFF0F4' },
  avoidLeft: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 3 },
  avoidFood: { fontSize: 14, fontWeight: '700', color: '#B71C1C' },
  avoidReason: { fontSize: 13, color: '#7B6472', lineHeight: 19, paddingLeft: 22 },

  // Cravings
  cravingCard: { backgroundColor: '#FFF5F8', borderRadius: 10, padding: 11, marginBottom: 8, borderWidth: 1, borderColor: '#FADADD' },
  cravingTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 },
  cravingFood: { fontSize: 14, fontWeight: '700', color: '#1A1A2E', flex: 1 },
  safeBadge: { borderRadius: 8, borderWidth: 1, paddingHorizontal: 7, paddingVertical: 3, marginLeft: 8 },
  safeBadgeText: { fontSize: 9, fontWeight: '900', letterSpacing: 0.6 },
  cravingMeaning: { fontSize: 12.5, color: '#7B6472', lineHeight: 18 },

  // Resources
  resourceCard: { borderLeftWidth: 3, paddingLeft: 12, paddingVertical: 8, marginBottom: 10 },
  resourceName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E', marginBottom: 4 },
  resourceContact: { fontSize: 13, color: '#7B6472', lineHeight: 19 },
  resourceNote: { fontSize: 12, color: '#B8A0AA', marginTop: 3, fontStyle: 'italic' },
});
